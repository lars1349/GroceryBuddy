function makeNewShoppingList() {
    return /*HTML*/ `
        <h2>Ny handleliste</h2>
        <div class='shopping_list_container'>
            <input type='text' class='shopping_list_name' id='shopping_list_name' placeholder='Navn på handleliste'>
            <button onclick='addShoppingListName()'class='shopping_list_confirm' id='shopping_list_confirm'>
                Bekreft
            </button>
        </div>

        <div id='errorMessage' style="color: red; margin-top: 5px;">
            ${model.app.errorMessage || ''}
        </div>
    `;
}

function addShoppingListName() {
    let nameInput = document.getElementById('shopping_list_name').value.trim();

    if (!nameInput) {
        model.app.errorMessage = '⚠️ Du må skrive inn et navn før du kan bekrefte!';
        updateView();
        return;
    }

    const newId = generateNewId(model.data.shoppingLists);

    const newList = {
        id: newId,
        name: nameInput,
        ownerUserId: model.app.currentUserId,
    };

    model.data.shoppingLists.push(newList);

    model.app.errorMessage = '';
    model.app.selectedShoppingListId = newId;
    model.app.currentPage = 'products'; // eller 'productView' hvis det er navnet i din app

    updateView();
}

function generateNewId(array) {
    if (!array.length) return 1;
    return Math.max(...array.map(item => item.id)) + 1;
}
