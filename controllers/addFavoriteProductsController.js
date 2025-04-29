function addSelectedFavorites() {
    let selectedProductIds = [];

    let currentUserId = model.app.currentUserId;
    let favorites = getUserFavoriteProducts(currentUserId);

    for (let i = 0; i < favorites.length; i++) {
        let productId = favorites[i].productId;
        let checkbox = document.getElementById('favorite-' + productId);
        if (checkbox && checkbox.checked) {
            selectedProductIds.push(parseInt(checkbox.value));
        }
    }

    if (selectedProductIds.length === 0) {
        alert('Vennligst velg minst ett favorittprodukt.');
        return;
    }

    let listId = model.app.selectedShoppingListId;

    for (let i = 0; i < selectedProductIds.length; i++) {
        let productId = selectedProductIds[i];
        if (!isValidProduct(productId)) continue;

        let alreadyExists = model.data.shoppingListProducts.some(
            product => product.shoppingListId === listId && product.productId === productId
        );
        if (alreadyExists) continue;

        model.data.shoppingListProducts.push({
            id: getNextLinkId(),
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
    }

    model.app.favoriteProductsAdded = true;
    model.app.currentPage = 'products'; 
    model.app.showProducts = true;
    updateView(); 

    model.app.favoriteProductsAdded = true;

    updateView();
}



function getUserFavoriteProducts(userId) {
    let favorites = [];
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId) {
            favorites.push(model.data.favoriteProducts[i]);
        }
    }
    return favorites;
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
