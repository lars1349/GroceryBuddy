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
    let shoppingListId = parseInt(document.getElementById('shoppingListId').value);
    let userId = parseInt(document.getElementById('userId').value);

    if (!shoppingListId || !userId || isNaN(shoppingListId) || isNaN(userId)) {
        return;
    }

    let newShareCode = createShareCode();
    let newId = 1;

    for (let j = 0; j < model.data.shareCodes.length; j++) {
        if (model.data.shareCodes[j].id >= newId) {
            newId = model.data.shareCodes[j].id + 1;
        }
    }

    //Legg til den nye delingskodeoppføringen i shareCodes
    model.data.shareCodes.push({ id: newId, shoppingListId, shareCode: newShareCode, userId });

    
    // Varsle brukeren med e-posten og delekoden
    for (let i = 0; i < model.data.users.length; i++) {
        if (model.data.users[i].id === userId) {
            return alert('En invitasjon er sendt til ' + model.data.users[i].email + ' med delingskoden: ' + newShareCode);
        }
    }

    alert('Bruker ikke funnet.');
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
