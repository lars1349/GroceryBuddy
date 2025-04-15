function addFavoriteProducts() {
    let currentUserId = model.app.currentUserId;
    let currentListId = model.app.selectedShoppingListId;

    if (!currentListId || !isShoppingListActive(currentListId)) {
        return;
    }

    let favorites = getUserFavorites(currentUserId);
    if (favorites.length === 0) {
        return;
    }

    addFavoritesToList(currentListId, favorites);
}

function isShoppingListActive(listId) {
    for (let i = 0; i < model.data.shoppingListHistories.length; i++) {
        if (model.data.shoppingListHistories[i].shoppingListId === listId) {
            return model.data.shoppingListHistories[i].isActive;
        }
    }
    return false;
}

function getUserFavorites(userId) {
    let favorites = [];
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId) {
            favorites.push(model.data.favoriteProducts[i]);
        }
    }
    return favorites;
}

function isProductInList(listId, productId, links) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].productId === productId) {
            return true;
        }
    }
    return false;
}

function isValidProduct(productId) {
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === productId) {
            return true;
        }
    }
    return false;
}

function getNextLinkId() {
    let maxId = 0;
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].id > maxId) {
            maxId = model.data.shoppingListProducts[i].id;
        }
    }
    return maxId + 1;
}

function addFavoritesToList(listId, favorites) {
    let existingLinks = [];
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === listId) {
            existingLinks.push(model.data.shoppingListProducts[i]);
        }
    }

    for (let i = 0; i < favorites.length; i++) {
        let productId = favorites[i].productId;

        if (!isValidProduct(productId) || isProductInList(listId, productId, existingLinks)) {
            continue;
        }

        model.data.shoppingListProducts.push({
            id: getNextLinkId(),
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
        existingLinks.push({
            shoppingListId: listId,
            productId: productId
        });
    }
}

function goToSettings() {
    model.app.currentPage = 'shoppingListSettings';
    updateView();
}