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
        
            <h2>${listName}</h2>
            
            <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
                ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
            </div> 
            <button class="btn products" onclick="toggleProductView()">Legg til varer</button>
            <button class="btn products" onclick="goToSettings()">Rediger liste</button>
        
        
        ${model.app.showProducts ? `
            <div class="product-input-group">
                <div class="autocomplete-wrapper">
                    <input type="text" id="productName" placeholder="Skriv produkt..." oninput="showSuggestions(this.value)">
                    <ul id="autocompleteList" class="autocomplete-list"></ul>
                </div>
                <button onclick="addProduct()">Legg til</button>
            </div>
            <table class="product-table">
                <tr>
                    <th>Antall</th>
                    <th>Navn</th>
                    <th></th>
                </tr>
                ${createProductTableRows()}
            </table>
        ` : ''}
        
    `;
}




function createProductTableRows() {
    let currentListId = model.app.selectedShoppingListId;
    let currentUserId = model.app.currentUserId;
    let productHtml = '';

    let linkedProducts = [];
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === currentListId) {
            linkedProducts.push(model.data.shoppingListProducts[i]);
        }
    }

    for (let i = 0; i < linkedProducts.length; i++) {
        let link = linkedProducts[i];
        let product = null;
        for (let j = 0; j < model.data.products.length; j++) {
            if (model.data.products[j].id === link.productId) {
                product = model.data.products[j];
                break;
            }
        }
        if (!product) {
            continue;
        }

        let isEditing = model.inputs.editProduct && model.inputs.editProduct.id === product.id;
        let isFavorite = false;
        for (let j = 0; j < model.data.favoriteProducts.length; j++) {
            if (model.data.favoriteProducts[j].userId === currentUserId && model.data.favoriteProducts[j].productId === product.id) {
                isFavorite = true;
                break;
            }
        }

        let starIcon = isFavorite ? '⭐' : '☆';
        let displayQuantity = Number.isFinite(link.quantity) ? link.quantity : '';

        productHtml += `
            <tr>
                <td>
                    <button class="quantity-btn" onclick="decreaseQuantity(${link.id})">-</button>
                    ${displayQuantity}
                    <button class="quantity-btn" onclick="increaseQuantity(${link.id})">+</button>
                </td>
                <td>
                    ${isEditing ? `<input value='${model.inputs.editProduct.name}' 
                                         onchange='updateEditProductName(this.value)'>`
                                : product.name}
                </td>
                <td class='product-actions'>
                    <span class="favorite-icon" onclick="toggleFavoriteProduct(${product.id})">${starIcon}</span>
                    ${isEditing ? `
                        <button class='saveButton' onclick='saveEditProduct()'>Lagre</button>
                        <button class='cancelButton' onclick='cancelEditProduct()'>Avbryt</button>
                    ` : `
                        <button class='editButton' onclick='editProduct(${product.id})'>Redigere</button>
                    `}
                    <button class='deleteButton' onclick='deleteProduct(${product.id})'>X</button>
                </td>
            </tr>
        `;
    }

    return productHtml;
}