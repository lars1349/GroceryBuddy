function shoppingListsSettingsView() {
    const listId = model.app.selectedShoppingListId;
    const list = model.data.shoppingLists.find(l => l.id === listId);

    return /*HTML*/ `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: space-between; 
            height: 40vh; 
            padding: 2rem;
            text-align: center;
        ">
            <div>
                <h2>Innstillinger for: ${list.name}</h2>
            </div>

         
                <button>Slett liste</button>
                <button onclick="shareCodeView()">Administrer kode</button>
                <button>legg til fav varer</button>
                <button onclick="toggleListActive(${list.id}, true)">aktiver</button>
                <button onclick="toggleListActive(${list.id}, false)">Deaktiver liste</button>
                <button onclick="goHome()">← Tilbake</button>
                
            </div>
        </div>
    `;
}
