function generateShareCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shareCode = '';
    let codeLength = 6; 
    for (let i = 0; i < codeLength; i = i + 1) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        shareCode = shareCode + characters[randomIndex];
    }
    return shareCode;
}

function createInvitationCode() {
    let shoppingListId = model.app.selectedShoppingListId;
    let userId = parseInt(document.getElementById('userId')?.value);
    let newEmail = document.getElementById('newEmail')?.value.trim();

    if (!shoppingListId) {
        alert("Ingen aktiv handleliste valgt.");
        return;
    }

    if (!userId && !newEmail) {
        alert("Du må enten velge en bruker eller angi en ny e-postadresse.");
        return;
    }

    let  newShareCode = generateShareCode();
    let  newId = model.data.shareCodes.length > 0
        ? Math.max(...model.data.shareCodes.map(code => code.id)) + 1
        : 1;

    let targetUserId = userId;
    let emailToShow;

    if (newEmail) {
        // Bekreft e-postformat
        let  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            alert("Vennligst angi en gyldig e-postadresse.");
            return;
        }

        // Sjekk om e-post allerede eksisterer
        let existingUser = model.data.users.find(user => user.email.toLowerCase() === newEmail.toLowerCase());
        if (!existingUser) {
            // Opprett ny bruker
            let  newUserId = model.data.users.length > 0
                ? Math.max(...model.data.users.map(user => user.id)) + 1
                : 1;
            existingUser = {
                id: newUserId,
                email: newEmail
            };
            model.data.users.push(existingUser);
        }
        targetUserId = existingUser.id;
        emailToShow = newEmail;
    } else {
        let  user = model.data.users.find(user => user.id === userId);
        emailToShow = user.email;
    }

    if (!targetUserId || isNaN(targetUserId)) {
        alert("Ugyldig bruker.");
        return;
    }

    model.data.shareCodes.push({
        id: newId,
        shoppingListId,
        userId: targetUserId,
        shareCode: newShareCode
    });

    alert(`✅ En invitasjon er sendt til ${emailToShow} med delingskoden: ${newShareCode}`);
    
    shareCodeView();
}

function deleteShareCode() {
    let  shoppingListId = model.app.selectedShoppingListId;
    let  userId = parseInt(document.getElementById('userId')?.value);
    let  newEmail = document.getElementById('newEmail')?.value.trim();

    if (!shoppingListId) {
        alert('Ingen aktiv handleliste valgt');
        return;
    }

    let targetUserId = userId;
    if (newEmail) {
        let  user = model.data.users.find(u => u.email.toLowerCase() === newEmail.toLowerCase());
        if (!user) {
            alert('Brukeren med denne e-postadressen finnes ikke');
            return;
        }
        targetUserId = user.id;
    }

    if (!targetUserId || isNaN(targetUserId)) {
        alert('Vennligst velg en bruker eller skriv inn en gyldig e-postadresse');
        return;
    }

    let updatedShareCodes = [];
    let removedCode = false;
    
    for (let i = 0; i < model.data.shareCodes.length; i = i + 1) {
        let shareCodeEntry = model.data.shareCodes[i];
        if (shareCodeEntry.shoppingListId === shoppingListId && shareCodeEntry.userId === targetUserId) {
            removedCode = true;
        } else {
            updatedShareCodes.push(shareCodeEntry);
        }
    }

    if (!removedCode) {
        return alert('Ingen samsvarende delingskode funnet');
    }

    model.data.shareCodes = updatedShareCodes;
    alert('Delkode slettet vellykket!');
    shareCodeView();
    return;
}

function deleteSharedUser(shoppingListId, userId) {
    const confirmed = confirm("Er du sikker på at du vil fjerne deling med denne brukeren?");
    if (!confirmed) return;

    model.data.shareCodes = model.data.shareCodes.filter(
        code => !(code.shoppingListId === shoppingListId && code.userId === userId)
    );

    shareCodeView(); 
}
