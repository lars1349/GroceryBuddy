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
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === id) {
            model.data.products.splice(i, 1);
            updateView();
            return;
        }
    }
}


function editProduct(id) {
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === id) {
            model.inputs.editProduct = { id: id, name: model.data.products[i].name };

            updateView();
            return;
        }
    }
}

function saveEditProduct() {
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === model.inputs.editProduct.id) {
            model.data.products[i].name = model.inputs.editProduct.name.trim();
            model.inputs.editProduct = {}; 
            updateView();
            return;
        }
    }
}
