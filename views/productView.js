function productView() {
    return /*HTML*/`
        <h2> Produkter </h2>

        <input id='produktnavn' type='text' placeholder='produktnavn'>
        <button onclick='addProduct()'>legge til </button>

        <table>
        <tr>
            <th>ID</th>
            <th>Navn</th>           
          
        </tr>
        ${getProducts()}

        </table>

        
    `;
}

function getProducts() {
    let productHtml = '';
    for(let product of model.data.products) {
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
    const productNameInput = document.getElementById('productName');
    const productName = productNameInput.value.trim();
    
    if (!productName) {
        alert('Produktnavnet kan ikke være tomt');
        return;
    }

    
    let newId = 1;
    if (model.data.products.length > 0) {
        for (let product of model.data.products) {
            if (product.id >= newId) {
                newId = product.id + 1;
            }
        }
    }

    let newProduct = {
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

