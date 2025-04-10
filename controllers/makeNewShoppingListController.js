
function addShoppingListName() {
    const nameInput = getShoppingListNameInput();
    if (!nameInput) return;

    const newListId = createShoppingList(nameInput);
    createEmptyHistory(newListId);
    switchToNewList(newListId);

    updateView();
}


function getShoppingListNameInput() {
    const name = document.getElementById('shopping_list_name').value.trim();
    if (!name) {
        model.app.errorMessage = '⚠️ Du må skrive inn et navn før du kan bekrefte!';
        updateView();
        return null;
    }
    return name;
}

function createShoppingList(name) {
    const newId = generateNewId(model.data.shoppingLists);
    const newList = {
        id: newId,
        name: name,
        ownerUserId: model.app.currentUserId,
    };
    model.data.shoppingLists.push(newList);
    return newId;
}

function createEmptyHistory(listId) {
    const newHistory = {
        id: generateNewId(model.data.shoppingListHistories),
        shoppingListId: listId,
        completedDate: null,
        isActive: true,
    };
    model.data.shoppingListHistories.push(newHistory);
}

function switchToNewList(listId) {
    model.app.selectedShoppingListId = listId;
    model.app.errorMessage = '';
    model.app.currentPage = 'products';
    model.app.showProducts = false;
    model.inputs.editProduct = {};

}


function generateNewId(array) {
    if (!array.length) return 1;
    return Math.max(...array.map(item => item.id)) + 1;
}