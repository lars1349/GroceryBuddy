function productView() {
    return /*HTML*/`
    
        <h2>Produkter</h2>
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
                    
                    ${isEditing ? `<button class='save-btn' onclick='saveEditProduct()'>Spare</button>` 
                                : `<button class='edit-btn' onclick='editProduct(${product.id})'>Redigere</button>`} 
                     <button class='delete-btn' onclick='deleteProduct(${product.id})'>X</button>   
                    
                </td>
            </tr>
        `;
    }
    return productHtml;
}

