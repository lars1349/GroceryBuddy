function productView() {
    return /*HTML*/`
        <h2>Products</h2>
        <input id='productName' type='text' placeholder='Product Name'>
        <button onclick='addProduct()'>Add </button>
        <table>
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
    for(const product of model.data.products) {
        productHtml += /*HTML*/`
            <tr>
                <td>${product.id}</td>
                <td> ${product.name} </td>
                
                <td>
                    <button onclick='deleteProduct(${product.id})'>X</button>
                </td>
            </tr>
        `;
    }

    return productHtml;
}

function addProduct() {
    const productNameInput = document.getElementById("productName");
    const productName = productNameInput.value.trim();
    
    if (!productName) {
        alert('Product name cannot be empty');
        return;
    }

    
    let newId = 1;
    if (model.data.products.length > 0) {
        for (const product of model.data.products) {
            if (product.id >= newId) {
                newId = product.id + 1;
            }
        }
    }

    const newProduct = {
        id: newId,
        name: productName,
        isChecked: false
    };
    
    model.data.products.push(newProduct);
    productNameInput.value = '';
    updateView();
}

function deleteProduct(id) {
    let index = 0;
    for(const product of model.data.products) {
        if(product.id === id) {
            model.data.products.splice(index, 1);
            break;
        }
        index++;
    }

    updateView();
}

