function setListActive(historyId) {
    const history = model.data.shoppingListHistories.find(h => h.id === historyId);
    if (history) {
        history.isActive = true;
        history.completedDate = null; // Optionally clear the completed date
    }

    model.app.currentPage = 'home';
    updateView();
}
