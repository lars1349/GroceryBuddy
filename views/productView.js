function productView() {
    let list = null;

    for (let i = 0; i < model.data.shoppingLists.length; i++) {
        if (model.data.shoppingLists[i].id === model.app.selectedShoppingListId) {
            list = model.data.shoppingLists[i];
            break;
        }
    }

    let listName = list ? list.name : 'Ukjent liste';

    return /*HTML*/`
        <h2>${listName}</h2>

        <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
            ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
        </div>
      
        <button class='btn products' onclick='toggleProductView()'>Legg til varer</button>
        <button onclick="model.app.currentPage = 'shoppingListSettings'; updateView()">rediger liste</button>


        ${model.app.showProducts ? `
            <div class='product-input-group'>
                <input id='productName' type='text' placeholder='Produktnavn'>
                <button onclick="addProduct()">Legge til </button>
            </div>

            <table class="product-table">
            <tr>
                <th>ID</th>
                <th>Navn</th>
                <th></th>
            </tr>
            ${CreateProductTableRows()}
            </table>
        ` : ''}
    `;
}

function CreateProductTableRows() {
    let productHtml = '';
    for (const product of model.data.products) {
        const isEditing = model.inputs.editProduct && model.inputs.editProduct.id === product.id;
        
        productHtml += /*HTML*/`
            <tr>
                <td>${product.id}</td>
                <td>
                    ${isEditing ? `<input value='${model.inputs.editProduct.name}' 
                                     onchange='model.inputs.editProduct.name = this.value'>`
                                : product.name}
                </td>
                <td class='product-actions'>
                    ${isEditing ? `<button class='saveButton' onclick='saveEditProduct()'>Lagre</button>` 
                                : `<button class='editButton' onclick='editProduct(${product.id})'>Redigere</button>`} 
                    <button class='deleteButton' onclick='deleteProduct(${product.id})'>X</button>   
                </td>
            </tr>
        `;

       
    }
    return productHtml;
}


