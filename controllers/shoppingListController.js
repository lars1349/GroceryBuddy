function openShoppingList(listId) {
    model.app.selectedShoppingListId = listId;
    model.app.currentPage = 'products'; 
    updateView();
}

function goHome() {
    model.app.currentPage = 'home';
    updateView();
}

function toggleListActive(listId, setActive) {
    const history = model.data.shoppingListHistories.find(h => h.shoppingListId === listId);

    if (history) {
        history.isActive = setActive;
        history.completedDate = setActive ? null : new Date().toISOString().split('T')[0]; 
    } else {
       
        model.data.shoppingListHistories.push({
            id: generateNewId(model.data.shoppingListHistories),
            shoppingListId: listId,
            completedDate: setActive ? null : new Date().toISOString().split('T')[0],
            isActive: setActive,
        });
    }

    model.app.currentPage = setActive ? 'home' : 'history';
    updateView();
}

