function createShareCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shareCode = '';
    for (let i = 0; i < 6; i = i + 1) {
        let  randomIndex = Math.floor(Math.random() * characters.length);
        shareCode = shareCode + characters[randomIndex];
    }
    return shareCode;
}


function generateInvitationCode() {
    const shoppingListId = model.app.selectedShoppingListId;
    const userId = parseInt(document.getElementById('userId')?.value);

    if (!shoppingListId || !userId || isNaN(userId)) {
        alert("Du må velge en bruker.");
        return;
    }

    const newShareCode = createShareCode();
    const newId = model.data.shareCodes.length > 0
        ? Math.max(...model.data.shareCodes.map(sc => sc.id)) + 1
        : 1;

    model.data.shareCodes.push({
        id: newId,
        shoppingListId,
        userId,
        shareCode: newShareCode
    });

    const user = model.data.users.find(u => u.id === userId);
    alert(`✅ En invitasjon er sendt til ${user.email} med delingskoden: ${newShareCode}`);
    
    shareCodeView(); 
}

function deleteShareCode() {
    let shoppingListId = parseInt(document.getElementById('shoppingListId').value);
    let userId = parseInt(document.getElementById('userId').value);
   
    if (shoppingListId === 0 || userId === 0 || isNaN(shoppingListId) || isNaN(userId)) {
        return alert('Ugyldig handleliste eller bruker-ID');
    }

    let updatedShareCodes = [];
    let removed = false;
    
    for (let i = 0; i < model.data.shareCodes.length; i = i + 1) {
        let  shareCodeEntry = model.data.shareCodes[i];
        if (shareCodeEntry.shoppingListId === shoppingListId && shareCodeEntry.userId === userId) {
            removed = true;
        } else {
            updatedShareCodes.push(shareCodeEntry);
        }
    }

    if (!removed) {
        return alert('Ingen samsvarende delingskode funnet');
    }

    model.data.shareCodes = updatedShareCodes;
    alert('Delkode slettet vellykket!');
    updateView()
    return;
}


