// Funksjon for å legge til alle produkter fra en handleliste til favoritter
function addFavoriteProducts() {
    let currentUserId = model.app.currentUserId;
    let currentListId = model.app.selectedShoppingListId;

    
    if (!currentListId) {
        model.app.currentPage = 'shoppingListView';
        updateView();
        return;
    }

    let listProducts = [];
    let anyFavoritesAdded = false;

    // Samle alle produktene i den valgte handlelisten
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === currentListId) {
            listProducts.push(model.data.shoppingListProducts[i]);
        }
    }

    
    let maxId = 0;
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].id > maxId) {
            maxId = model.data.favoriteProducts[i].id;
        }
    }

    // Legg til produkter i favoritter hvis de ikke allerede er favoritt
    for (let i = 0; i < listProducts.length; i++) {
        let listProduct = listProducts[i];
        let productId = listProduct.productId;
        let alreadyFavorite = false;

        
        for (let j = 0; j < model.data.favoriteProducts.length; j++) {
            if (model.data.favoriteProducts[j].userId === currentUserId &&
                model.data.favoriteProducts[j].productId === productId) {
                alreadyFavorite = true;
                break;
            }
        }

        
        if (!alreadyFavorite) {
            maxId++;
            model.data.favoriteProducts.push({
                id: maxId,
                userId: currentUserId,
                productId: productId
            });
            anyFavoritesAdded = true;
        }
    }

    
    model.app.currentPage = 'shoppingListSettings';
    updateView();
}

// Funksjon for å bytte favorittstatus for et produkt
function toggleFavorite(productId) {
    let userId = model.app.currentUserId;
    let favoriteIndex = -1;

    // Finn indeksen til favorittproduktet
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId &&
            model.data.favoriteProducts[i].productId === productId) {
            favoriteIndex = i;
            break;
        }
    }

    if (favoriteIndex !== -1) {
        
        model.data.favoriteProducts.splice(favoriteIndex, 1);
    } else {
        // Hvis ikke en favoritt, legg den til
        let maxId = 0;

        //Bestem maksimal eksisterende favorittprodukt-ID
        for (let i = 0; i < model.data.favoriteProducts.length; i++) {
            if (model.data.favoriteProducts[i].id > maxId) {
                maxId = model.data.favoriteProducts[i].id;
            }
        }

        model.data.favoriteProducts.push({ id: maxId + 1, userId, productId });
    }

    
    addFavoriteProductsView();
}


function goSettings() {
    model.app.currentPage = 'shoppingListSettings';
    updateView();
}
