
function shareCodeView() {
    document.getElementById('content').innerHTML = createShareCodeHtml();
}

function createShareCodeHtml() {
    let userOptions = '<option value="">Velg Bruker</option>';
    for (let user of model.data.users) {
        userOptions += `<option value="${user.id}">${user.email}</option>`;
    }

    let selectedListId = model.app.selectedShoppingListId;
    let sharedUsersHTML = '';

    if (selectedListId) {
        let sharedCodes = model.data.shareCodes.filter(code => code.shoppingListId === selectedListId);

        if (sharedCodes.length > 0) {
            sharedUsersHTML += `<div style="margin-top: 1.5rem;"><strong>Handlelisten deles med:</strong><ul>`;
            for (let code of sharedCodes) {
                let user = model.data.users.find(user => user.id === code.userId);
                if (user) {
                    sharedUsersHTML += `<li>${user.email} 
                    <button class='deleteButton' onclick='deleteSharedUser(${code.shoppingListId}, ${user.id})'>X</button>
                    </li>`;
                }
            }
            sharedUsersHTML += `</ul></div>` ;
        }
    }

    let list = model.data.shoppingLists.find(list => list.id === selectedListId);

    return /*HTML*/ `
        <div class="share-code-container">
        
            <h1 class="share-code-title"><span style="color: #66bb6a">${list?.name || 'Ukjent liste'}</span></h1>

            <div class="share-code-field">
                <label for="userId">Bruker:</label>
                <select id="userId" class="share-code-select">${userOptions}</select>
            </div>

            <div class="share-code-field">
                <label for="newEmail">Ny bruker:</label>
                <input class="code-share-epost" type="email" id="newEmail" class="share-code-input" placeholder="Skriv inn ny e-post">
            </div>

            <div class="share-code-buttons">
                <button onclick="createInvitationCode()" class="share-code-button">Generer delekode</button>
                <button onclick="deleteShareCode()" class="share-code-button delete">Slett delingskode</button>
            </div>

            ${sharedUsersHTML}
        </div>
        <button class="btnback" onclick="goBack()">← Tilbake</button>
    `;
}