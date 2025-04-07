function deleteCurrentShoppingList() {
    const listId = model.app.selectedShoppingListId;

    const confirmed = confirm("Er du sikker på at du vil slette denne handlelisten? 🗑️");
    if (!confirmed) return;

   
    model.data.shoppingLists = model.data.shoppingLists.filter(list => list.id !== listId);
    model.data.shoppingListProducts = model.data.shoppingListProducts.filter(item => item.shoppingListId !== listId);
    model.data.shoppingListHistories = model.data.shoppingListHistories.filter(h => h.shoppingListId !== listId);
    model.data.shareCodes = model.data.shareCodes.filter(s => s.shoppingListId !== listId);

    model.app.selectedShoppingListId = null;
    model.app.currentPage = 'home';

    
    updateView();
}


 

 

   
