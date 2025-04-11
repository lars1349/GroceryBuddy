function shareCodeView() {
    const showShareCode = document.getElementById('content');
    showShareCode.innerHTML = createShareCodeHtml();
}


function createShareCodeHtml() {
    let shoppingListOptions = '<option value="">Velg Handleliste</option>';
    for (let shoppingList of model.data.shoppingLists) {
        shoppingListOptions += `<option value="${shoppingList.id}">${shoppingList.name}</option>`;
    }

    let userOptions = '<option value="">Velg Bruker</option>';
    for (let user of model.data.users) {
        userOptions += `<option value="${user.id}">${user.email}</option>`;
    }

    let selectedListId = model.app.selectedShoppingListId;
    let sharedUsersHTML = '';

    if (selectedListId) {
        const sharedCodes = model.data.shareCodes.filter(code => code.shoppingListId === selectedListId);

        if (sharedCodes.length > 0) {
            sharedUsersHTML += `<div style="margin-top: 1.5rem;"><strong>Handlelisten deles med:</strong><ul>`;
            for (const code of sharedCodes) {
                const user = model.data.users.find(u => u.id === code.userId);
                if (user) {
                    sharedUsersHTML += `<li>${user.email}</li>`;
                }
            }
            sharedUsersHTML += `</ul></div>`;
        }
    }

    const list = model.data.shoppingLists.find(l => l.id === selectedListId);

    return /*HTML*/ `
        <div class="share-code-container">
            <h1 class="share-code-title"><span style="color: #66bb6a">${list?.name || 'Ukjent liste'}</span></h1>

     
            <div class="share-code-field">
                <label for="userId">Bruker:</label>
                <select id="userId" class="share-code-select">${userOptions}</select>
            </div>

            <div class="share-code-buttons">
                <button onclick="generateInvitationCode()" class="share-code-button">Generer delekode</button>
                <button onclick="deleteShareCode()" class="share-code-button delete">Slett delingskode</button>
            </div>

            ${sharedUsersHTML}
        </div>
    `;
}


        

        
        

        
