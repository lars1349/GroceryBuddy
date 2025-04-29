

function  addFavoriteProductsView() {
    
    let listName = 'Ukjent liste';
    let selectedListId = model.app.selectedShoppingListId;

    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        if (model.data.shoppingLists[i].id === selectedListId) {
            listName = model.data.shoppingLists[i].name;
            break;
        }
    }

    let favoriteSelectionHtml = selectFavoriteProductsView();
    let addedFavoritesHtml=productView(false);

    return `
        <div class="mainContainer">
            <button class="btnback" onclick="goHome()">← Tilbake</button>
            <h2>Din liste: ${listName}</h2>
            <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
                ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
            </div> 
            
            <div class="container">
                ${favoriteSelectionHtml}
            </div>

            <div class="container">
                ${addedFavoritesHtml}
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
    
    // Gå gjennom favoritter og generer HTML
    for (let i = 0; i < favorites.length; i++) {
        let productId = favorites[i].productId;
        let product = model.data.products.find(product => product.id === productId);
        if (!product) continue;
        
        favoriteListHtml += `
            <div class="favorite-item">
                <input type="checkbox" id="favorite-${productId}" value="${productId}">
                <label for="favorite-${productId}">${product.name}</label>
            </div>
        `;
    }

    return `
        <div>
            <h4>Velg favoritter å legge til</h4>
            <div class="favorite-selection">
                ${favoriteListHtml}
            </div>
            <button class="favorite-selection-button" onclick="addSelectedFavorites()">Legg til valgte</button>
        </div>
    `;
}
