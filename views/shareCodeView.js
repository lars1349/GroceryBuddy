
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
        
        <div>
        <h1>Dele kode</h1>
            <label>Handleliste:
                <select id="shoppingListId">${shoppingListOptions}</select>
            </label>
            <label>Bruker:
                <select id="userId">${userOptions}</select>
            </label>
            <button onclick="generateInvitationCode()">Generer delekode</button>
            <button onclick="deleteShareCode()">Slett delingskode</button>
        </div>
    `;
}
