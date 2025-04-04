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

      const newHistory = {
        id: generateNewId(model.data.shoppingListHistories),
        shoppingListId: newId,
        completedDate: null,
        isActive: true,
    };

    model.data.shoppingLists.push(newList);
    model.app.errorMessage = '';
    model.app.selectedShoppingListId = newId;
    model.data.shoppingListHistories.push(newHistory);
    model.app.currentPage = 'products'; // eller 'productView' hvis det er navnet i din app

     model.data.products = [];
     model.app.showProducts = false;

    updateView();
}


function generateNewId(array) {
    if (!array.length) return 1;
    return Math.max(...array.map(item => item.id)) + 1;
}