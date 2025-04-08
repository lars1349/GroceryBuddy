function reuseFavoriteProduct(userId, productId) {
    let currentListId = model.app.selectedShoppingListId;
    if (!currentListId) {
        
        model.app.currentPage = 'shoppingListView';
        updateView();
        return;
    }

    var existingProduct = null;
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === currentListId && 
            model.data.shoppingListProducts[i].productId === productId) {
            existingProduct = model.data.shoppingListProducts[i];
            break;
        }
    }

    if (existingProduct !== null) {
        existingProduct.quantity += 1; // Øk mengde hvis allerede i listen
    } else {
        let maxId = 0;
        for (let j = 0; j < model.data.shoppingListProducts.length; j++) {
            if (model.data.shoppingListProducts[j].id > maxId) {
                maxId = model.data.shoppingListProducts[j].id;
            }
        }
        model.data.shoppingListProducts.push({
            id: maxId + 1,
            shoppingListId: currentListId,
            productId: productId,
            quantity: 1
        });
    }

    
    model.app.currentPage = 'shoppingListView';
    updateView();
}

function removeFavoriteProduct(userId, productId) {
    let deletedIndex = -1; // to track if a favorite was removed. Starts as -1 to indicate no favorite has been removed yet. It will store the index of the removed item if found.
    let newFavorites = []; //An empty array to collect all favorite products except the one to be removed.

    // Bygg ny matrise og spor indeksen til den fjernede favoritten
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId && 
            model.data.favoriteProducts[i].productId === productId) {
            deletedIndex = i; // Sets deletedIndex = i to mark the removal position
        } else {
            newFavorites.push(model.data.favoriteProducts[i]);
        }
    }

    if (deletedIndex !== -1) {
        
        model.data.favoriteProducts = newFavorites;

        // Tilordne ID-er på nytt sekvensielt fra 1
        for (let i = 0; i < model.data.favoriteProducts.length; i++) {
            model.data.favoriteProducts[i].id = i + 1;
        }

        
        model.app.currentPage = 'favouriteProducts';
        updateView();
    }
}

function goBack() {
    model.app.currentPage = 'newShoppingList';
    updateView();
}