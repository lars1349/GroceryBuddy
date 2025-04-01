function productView() {
    const list = model.data.shoppingLists.find(
        l => l.id === model.app.selectedShoppingListId
    );
    const listName = list?.name || 'Ukjent liste';

    return /*HTML*/`
        <h2>${listName}</h2>

        <div id="saveStatus" style="margin-bottom: 10px; color: ${model.app.isSaving ? 'red' : 'green'};">
            ${model.app.isSaving ? 'Lagrer...' : 'Alt er lagret ✅'}
        </div>
      
        <button class='btn products' onclick='toggleProductView()'>Legg til varer</button>
        <button>Rediger Liste</button>

        ${model.app.showProducts ? `
            <div class='product-input-group'>
                <input id='productName' type='text' placeholder='Product Name'>
                <button onclick="addProduct()">Add </button>
            </div>

            <table class="product-table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
            </tr>
            ${getProducts()}
            </table>
        ` : ''}
    `;
}

function getProducts() {
    let productHtml = '';
    for (const product of model.data.products) {
        const isEditing = model.inputs.editProduct?.id === product.id;
        
        productHtml += /*HTML*/`
            <tr>
                <td>${product.id}</td>
                <td>
                    ${isEditing ? `<input value='${model.inputs.editProduct.name}' 
                                     onchange='model.inputs.editProduct.name = this.value'>`
                                : product.name}
                </td>
                <td class='product-actions'>
                    ${isEditing ? `<button class='saveButton' onclick='saveEditProduct()'>Spare</button>` 
                                : `<button class='editButton' onclick='editProduct(${product.id})'>Redigere</button>`} 
                    <button class='deleteButton' onclick='deleteProduct(${product.id})'>X</button>   
                </td>
            </tr>
        `;
    }
    return productHtml;
}

function toggleProductView() {
    model.app.showProducts = !model.app.showProducts;
    updateView();
}
