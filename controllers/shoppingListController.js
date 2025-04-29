function openShoppingList(listId) {
    model.app.selectedShoppingListId = listId;
    model.app.currentPage = 'shoppingListView';
    updateView();
}

function toggleListActive(listId, setActive) {
    const history = model.data.shoppingListHistories.find(h => h.shoppingListId === listId);

   if (history) {
        history.isActive = setActive;
        if (!setActive) {
            history.completedDate = new Date().toISOString().split('T')[0]; 
        }
    } else {
        model.data.shoppingListHistories.push({
            id: generateNewId(model.data.shoppingListHistories),
            shoppingListId: listId,
            completedDate: setActive ? null : new Date().toISOString().split('T')[0],
            isActive: setActive,
        });
    }

    model.app.currentPage = setActive ? 'history' : ' home';
    updateView();
}


function toggleProductChecked(productId) {
    const product = model.data.products.find(p => p.id === productId);
    if (!product) return;

    product.isChecked = !product.isChecked;
    setSaving();
    updateView();
}


function goToProductView(){
    model.app.currentPage = 'products'
    updateView();
}