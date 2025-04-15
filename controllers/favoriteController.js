function reuseFavoriteProduct(userId, productId) {
    let currentListId = model.app.selectedShoppingListId;
    if (!currentListId) {
        return;
    }

    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        let link = model.data.shoppingListProducts[i];
        if (link.shoppingListId === currentListId && link.productId === productId) {
            link.quantity += 1;
            setSaving();
            return;
        }
    }

    let nextLinkId = 0;
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].id > nextLinkId) {
            nextLinkId = model.data.shoppingListProducts[i].id;
        }
    }

    model.data.shoppingListProducts.push({
        id: nextLinkId + 1,
        shoppingListId: currentListId,
        productId: productId,
        quantity: 1
    });

    setSaving();
}

function removeFavoriteProduct(userId, productId) {
    let updatedFavorites = [];

    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        let favorite = model.data.favoriteProducts[i];
        if (favorite.userId === userId && favorite.productId === productId) {
            continue;
        }
        updatedFavorites.push(favorite);
    }

    if (updatedFavorites.length < model.data.favoriteProducts.length) {
        model.data.favoriteProducts = updatedFavorites;

        for (let i = 0; i < model.data.favoriteProducts.length; i++) {
            model.data.favoriteProducts[i].id = i + 1;
        }

        setSaving();
    }
}

function goBack() {
    model.app.currentPage = 'home';
    updateView();
}