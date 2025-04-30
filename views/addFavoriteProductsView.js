function addFavoriteProductsViewContent() {
        
    model.app.isSaving = true;
    
    let favoriteSelectionHtml = selectFavoriteProductsView();
    

          
    let listName = 'Ukjent liste';
    let selectedListId = model.app.selectedShoppingListId;

    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        if (model.data.shoppingLists[i].id === selectedListId) {
            listName = model.data.shoppingLists[i].name;
            break;
        }
    }
    
    model.app.showProducts = true;

    return `
        <div class="mainContainer">
            <button class="btnback" onclick="goBack()">← Tilbake</button>
            <h2>Din liste: ${listName}</h2>
            
            <div class="container">
                ${favoriteSelectionHtml}
            </div>

            
        </div>
        
    `;
}




function selectFavoriteProductsView() {
    let currentUserId = model.app.currentUserId;
    let favorites = getUserFavoriteProducts(currentUserId);

    if (favorites.length === 0) {
        return `<p>Du har ingen favoritter</p>`;
    }

    let favoriteListHtml = '';

    for (let i = 0; i < favorites.length; i++) {
        let productId = favorites[i].productId;
        let product = model.data.products.find(product => product.id === productId);
        if (!product) continue;

        favoriteListHtml += `
            <div class="favorite-item-check">
                <input type="checkbox" id="favorite-${productId}" value="${productId}">
                <label for="favorite-${productId}">${product.name}</label>
            </div>
        `;
    }

    return `
        <div id="favorite-selection-container-check">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Velg favoritter å legge til</h3>
                
            </div>
            <div class="favorite-selection">
                ${favoriteListHtml}
            </div>
            <button class="favorite-selection-button" onclick="addSelectedFavorites()">Legg til valgte</button>
        </div>
    `;
}
