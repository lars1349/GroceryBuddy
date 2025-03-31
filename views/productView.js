



function productView() {
    return /*HTML*/`
    
       <h2>${model.app.shoppingList}</h2>
      
       <button class='btn products' onclick='toggleProductView()'>Legg til varer</button>
       <button class='btn products' onclick=''>Lagre</button>

      
       ${model.app.showProducts ? `
        
         <div class='product-input-group'>
            <input id='productName' type='text' placeholder='Produktnavn'>
            <button onclick="addProduct()">Legge til </button>
        </div>

        <table class="product-table">
        <tr>
            <th>ID</th>
            <th>Name</th>
            
            <th></th>
        </tr>
        ${createProductTableRows()}

        </table>

        `: ''}

        
    `;
}
function createProductTableRows() {

    let productHtml = '';
    for (const product of model.data.products) {
        const isEditing = (model.inputs.editProduct && model.inputs.editProduct.id === product.id);
        
        productHtml += /*HTML*/`
            <tr>
                <td>${product.id}</td>
                <td>
                    ${isEditing ? `<input value='${model.inputs.editProduct.name}' 
                                         onchange='model.inputs.editProduct.name = this.value'>`
                                : product.name}
                </td>
                <td class='product-actions'>
                    
                    ${isEditing ? `<button class='saveButton ' onclick='saveEditProduct()'>Spare</button>` 
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

