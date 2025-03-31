function openShoppingList(listId) {
    model.app.selectedShoppingListId = listId;
    model.app.currentPage = 'shoppingListView';
    updateView();
}
function goHome() {
    model.app.currentPage = 'home';
    updateView();
}
