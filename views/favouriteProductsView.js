
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

        if (product) {
            
            let quantity = model.temp.favoriteQuantities[product.id] ?? 1;
            // Hent lagret listevalg, eller bruk gjeldende valgte liste som standard
            let selectedListId = model.temp.selectedLists[product.id] ?? model.app.selectedShoppingListId;

            favoriteHtml += `
                <li>
                    <div class="favorite-item">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseFavoriteProduct(${userId}, ${product.id})">-</button>
                            <span id="quantity-${product.id}" class="quantity">${quantity}</span>
                            <button class="quantity-btn" onclick="increaseFavoriteProduct(${userId}, ${product.id})">+</button>
                        </div>
                        <div>
                         <span class="product-name">${product.name}</span>
                        <select id="select-list-${product.id}" class="list-selector">
                            ${createListOptions(selectedListId)} <!-- Pass the selectedListId -->
                        </select>
                        </div>
                      <div class="fav-btn">
                        <button class="reuse-button" onclick="reuseFavoriteProduct(${userId}, ${product.id}, parseInt(document.getElementById('quantity-${product.id}').innerText))">Legg til</button>
                        <button class="remove-button" onclick="removeFavoriteProduct(${userId}, ${product.id})">X</button>
                        </div>
                    </div>
                </li>
            `;
        } else {
            favoriteHtml += `<li>Produkt med ID ${favorite.productId} ikke funnet</li>`;
        }
    }

    return favoriteHtml;
}

// Opprett alternativer for rullegardinmenyen for listevalg
function createListOptions(selectedListId) {
    let options = '';
    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        let list = model.data.shoppingLists[i];
        let selected = list.id === selectedListId ? 'selected' : '';
        options += `<option value="${list.id}" ${selected}>${list.name}</option>`;
    }
    return options;
}

