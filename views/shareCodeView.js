function shareCodeView() {
    let showShareCode = document.getElementById('content');
    showShareCode.innerHTML = createShareCodeHtml();
}

function createShareCodeHtml() {
    
    let shoppingListOptions = '<option value="">Velg Handleliste</option>';
    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        const shoppingList = model.data.shoppingLists[i];
        shoppingListOptions += `<option value="${shoppingList.id}">${shoppingList.name}</option>`;
    }
    
    let userOptions = '<option value="">Velg Bruker</option>';
    for (let i = 0; i < model.data.users.length; i++) {
        const user = model.data.users[i];
        userOptions += `<option value="${user.id}">${user.email}</option>`;
    }

    return /*HTML*/ `
    <div class="share-code-container">
        <h1 class="share-code-title">Dele kode</h1>
        
        <div class="share-code-field">
            <label for="shoppingListId">Handleliste:</label>
            <select id="shoppingListId" class="share-code-select">${shoppingListOptions}</select>
        </div>

        <div class="share-code-field">
            <label for="userId">Bruker:</label>
            <select id="userId" class="share-code-select">${userOptions}</select>
        </div>

        <div class="share-code-buttons">
            <button onclick="generateInvitationCode()" class="share-code-button">Generer delekode</button>
            <button onclick="deleteShareCode()" class="share-code-button delete">Slett delingskode</button>
        </div>
    </div>
`;
}