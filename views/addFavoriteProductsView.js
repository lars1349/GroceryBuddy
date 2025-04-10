function addFavoriteProductsView() {
    let showFavoriteProducts = document.getElementById('content');
    showFavoriteProducts.innerHTML = favoriteProductsListColumns();
    
}


function favoriteProductsListColumns() {
    return /*HTML*/`
        <div class="container">
            <button class="btnback" onclick="goSettings()">← Tilbake</button>
            <h3> Legg til favorittprodukter </h3>
            <table class="product-table">
                <tr>
                    <th>ID</th>
                    <th>Navn</th>
                    <th></th>
                </tr>
                ${createFavoriteProductTable()}
            </table>
        </div>
    `;
}


function createFavoriteProductTable() {
    let userId = model.app.currentUserId;
    let favorites = [];
    let FavoriteProductHtml = '';

    
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId) {
            favorites.push(model.data.favoriteProducts[i]);
        }
    }

    for (let i = 0; i < model.data.products.length; i++) {
        let product = model.data.products[i];
        let isFavorite = false;

        
        for (let j = 0; j < favorites.length; j++) {
            if (favorites[j].productId === product.id) {
                isFavorite = true;
                break;
            }
        }

        let starIcon = isFavorite ? '⭐' : '☆'; 

        FavoriteProductHtml += /*HTML*/`
            <tr>
                <td>${product.id}</td>
                <td>
                ${product.name}
                </td>
                <td class="product-actions">
                    <span class="favorite-icon" onclick="toggleFavorite(${product.id})">${starIcon}</span>
                </td>
            </tr>
        `;
    }

    return FavoriteProductHtml;
}

