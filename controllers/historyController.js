function toggleListActive(listId, setActive) {
    const history = model.data.shoppingListHistories.find(h => h.shoppingListId === listId);

    if (history) {
        history.isActive = setActive;
        history.completedDate = setActive ? null : new Date().toISOString().split('T')[0]; // optional: set date
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
