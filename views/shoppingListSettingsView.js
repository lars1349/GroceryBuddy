function shoppingListsSettingsView() {
    const listId = model.app.selectedShoppingListId;
    const list = model.data.shoppingLists.find(l => l.id === listId);

    return /*HTML*/ `
        <div class="setting_view">
            <h2>Innstillinger for: <span style="color: #66bb6a">${list.name}</span></h2>

            <button class='btn' onclick="deleteCurrentShoppingList()">🗑️ Slett liste</button>
            <button class='btn' onclick='shareCodeView()'; updateView()'>🔗 Administrer kode</button>
            <button class='btn' onclick='addFavoriteProductsView()';updateView()'>⭐ Legg til favorittvarer</button>
            <button class='btn' onclick="toggleListActive(${list.id}, true)">✅ Aktiver</button>
            <button class='btn' onclick="toggleListActive(${list.id}, false)">🚫 Deaktiver liste</button>
            <button class='btn' onclick="goHome()">← Tilbake</button>
        </div>
    `;
}
