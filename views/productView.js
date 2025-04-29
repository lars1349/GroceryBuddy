function productView() {
    let selectedListId = model.app.selectedShoppingListId;
    let listName = 'Ukjent liste';

    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        if (model.data.shoppingLists[i].id === selectedListId) {
            listName = model.data.shoppingLists[i].name;
            break;
        }
    }

    return `
<<<<<<< HEAD
        
            <h2>${listName}</h2>
            <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
                ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
            </div>
            <button class="btn products" onclick="toggleProductView()">Legg til varer</button>
            <button class="btn products" onclick="goToSettings()">Rediger liste</button>
        
        
=======
        <h2>${listName}</h2>
        <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
            ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
        </div>
        <button class="btn products" onclick="toggleProductView()">Legg til varer</button>
        <button class="btn products" onclick="goToSettings()">Rediger liste</button>
>>>>>>> 4d21c89b792b44afb1a7b34a2474e4003d73c9d8
        ${model.app.showProducts ? `
            <div class="product-input-group">
               <div class="autocomplete-wrapper">
               <input type="text" id="productName" placeholder="Skriv produkt..."
                oninput="showSuggestions(this.value)"
                onkeydown="if(event.key === 'Enter'){ event.preventDefault(); addProduct(); }"/>
                <ul id="autocompleteList" class="autocomplete-list"></ul>
                </div>
                <button onclick="addProduct()">Legge til</button>
            </div>
            <table class="product-table">
                <tr>
                    <th>Antall</th>
                    <th>Navn</th>
                    <th></th>
                </tr>
                ${createProductTableRows(true)}
            </table>
        ` : ''}
    `;
}
function createProductTableRows(showActions = true) {
    let currentListId = model.app.selectedShoppingListId;
    let currentUserId = model.app.currentUserId;
    let productHtml = '';

    let linkedProducts = model.data.shoppingListProducts.filter(link =>
        link.shoppingListId === currentListId
    );

    for (let link of linkedProducts) {
        let product = model.data.products.find(p => p.id === link.productId);
        if (!product) continue;

        let isEditing = model.inputs.editProduct && model.inputs.editProduct.id === product.id;
        let isFavorite = model.data.favoriteProducts.some(
            fav => fav.userId === currentUserId && fav.productId === product.id
        );

        let starIcon = isFavorite ? '⭐' : '☆';
        let displayQuantity = Number.isFinite(link.quantity) ? link.quantity : '';

        productHtml += `
            <tr>
                <td>
                    ${showActions ? `<button class="quantity-btn" onclick="decreaseQuantity(${link.id})">-</button>` : ''}
                    ${displayQuantity}
                    ${showActions ? `<button class="quantity-btn" onclick="increaseQuantity(${link.id})">+</button>` : ''}
                </td>
                <td>
                    ${isEditing && showActions
                        ? `<input value='${model.inputs.editProduct.name}' onchange='updateEditProductName(this.value)'>`
                        : product.name}
                </td>
                <td class='product-actions'>
                    ${showActions
                        ? `
                            <span class="favorite-icon" onclick="toggleFavoriteProduct(${product.id})">${starIcon}</span>
                            ${isEditing
                                ? `<button class='saveButton' onclick='saveEditProduct()'>Lagre</button>
                                   <button class='cancelButton' onclick='cancelEditProduct()'>Avbryt</button>`
                                : `<button class='editButton' onclick='editProduct(${product.id})'>Redigere</button>`}
                            <button class='deleteButton' onclick='deleteProduct(${product.id})'>X</button>
                          `
                        : ''
                    }
                </td>
            </tr>
        `;
    }

    return productHtml;
}
