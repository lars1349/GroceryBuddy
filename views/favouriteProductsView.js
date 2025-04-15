function favoriteProductsView() {
    let currentUserId = model.app.currentUserId;
    let userFavorites = [];

    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === currentUserId) {
            userFavorites.push(model.data.favoriteProducts[i]);
        }
    }

    return `
        <div class="favorite-products-container">
            <button class="btn back" onclick="goBack()">← Tilbake</button>
            <h1>Dine Favorittprodukter</h1>
            <ul id="favoriteProductsList">
                ${userFavorites.length === 0 
                    ? '<p>Ingen favorittprodukter funnet.</p>' 
                    : model.data.products.length === 0 
                        ? '<p>Ingen produkter tilgjengelig i systemet.</p>' 
                        : createFavoriteListProducts(userFavorites, currentUserId)}
            </ul>
        </div>
    `;
}

function createFavoriteListProducts(favorites, userId) {
    let favoriteHtml = '';

    for (let i = 0; i < favorites.length; i++) {
        let favorite = favorites[i];
        let product = null;

        for (let j = 0; j < model.data.products.length; j++) {
            if (model.data.products[j].id === favorite.productId) {
                product = model.data.products[j];
                break;
            }
        }

        favoriteHtml += `
            <li>
                ${product 
                    ? `${product.name} 
                       <button class="reuse-button" onclick="reuseFavoriteProduct(${userId}, ${product.id})">Bruk</button>
                       <button class="remove-button" onclick="removeFavoriteProduct(${userId}, ${product.id})">Fjern</button>`
                    : `Produkt med ID ${favorite.productId} ikke funnet`}
            </li>
        `;
    }

    return favoriteHtml;
}