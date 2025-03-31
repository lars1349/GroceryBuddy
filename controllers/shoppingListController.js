function openShoppingList(listId) {
    alert("Clicked list " + listId); // ✅ This will confirm it's hooked up
    model.app.selectedShoppingListId = listId;
    model.app.currentPage = 'shoppingListView';
    updateView();
}
