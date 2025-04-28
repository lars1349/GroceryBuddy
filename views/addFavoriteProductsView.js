let favoriteProductsAdded = false;
function addFavoriteProductsViewContent() {
    if (!model.app.favoriteProductsAdded) {
        addFavoriteProducts();
        model.app.favoriteProductsAdded = true;
    }

    model.app.showProducts = true;
    
    return `
        <div class="container">
            <button class="btnback" onclick="goBack()">← Tilbake</button>
              ${addedFavoriteListView()}
        </div>
    `;
}

function addFavoriteProductsView() {
    model.app.currentPage = 'addFavoriteProducts';
    model.app.favoriteProductsAdded = false;
    updateView();
}