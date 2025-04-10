function favoriteProductsView() {
    let userId = model.app.currentUserId;
    let userFavorites = [];

    // Samle brukerens favorittprodukter
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId) {
            userFavorites.push(model.data.favoriteProducts[i]);
        }
    }

    return /*HTML*/`
        <div class="favorite-products-container">
        <button class="btn back" onclick="goBack()">Tilbake</button>
            <h1>Dine Favorittprodukter</h1>
            <ul id="favoriteProductsList">
                    ${userFavorites.length === 0 
                    ? '<p>Ingen favorittprodukter funnet.</p>' 
                    : model.data.products.length === 0 
                        ? '<p>Ingen produkter tilgjengelig i systemet.</p>' 
                        : createFavoriteListProducts(userFavorites, userId)}
            </ul>
        </div>
    `;
}

function createFavoriteListProducts(favorites, userId) {
    let favoriteProductHtml = '';
    for (let favorite of favorites) {
        let product = null;
        for (let k = 0; k < model.data.products.length; k++) {
            if (model.data.products[k].id === favorite.productId) {
                product = model.data.products[k];
                break;
            }
        }

        favoriteProductHtml += /*HTML*/`
            <li>
                ${product !== null 
                    ? `${product.name} 
                       <button class="reuse-button" onclick="reuseFavoriteProduct(${userId}, ${product.id})">Bruk</button>
                       <button class="remove-button" onclick="removeFavoriteProduct(${userId}, ${product.id})">Fjern</button>`
                    : `Produkt med ID ${favorite.productId} ikke funnet`}
            </li>
        `;
    }
    return favoriteProductHtml;
}