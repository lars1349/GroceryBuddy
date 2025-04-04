function addProduct() {
    let productNameInput = document.getElementById('productName');
    let productName = productNameInput.value.trim();

    if (productName === '') {
        alert('Produktnavnet kan ikke være tomt');
        return;
    }

    let listId = model.app.selectedShoppingListId;
    let existingProduct = getExistingProduct(productName);
    let productId = getProductId(existingProduct);

    if (existingProduct === null) {
        model.data.products.push({
            id: productId,
            name: productName,
            isChecked: false
        });
    }

    updateShoppingList(listId, productId);

    productNameInput.value = '';
    setSaving();
    updateView();
}

function getExistingProduct(productName) {
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].name.toLowerCase() === productName.toLowerCase()) {
            return model.data.products[i];
        }
    }
    return null;
}

function getProductId(existingProduct) {
    let productId = 1;
    

    if (existingProduct !== null) {
        return existingProduct.id;
    }
    // Lag nytt produkt
    if (model.data.products.length > 0) {
        for (let i = 0; i < model.data.products.length; i++) {
            if (model.data.products[i].id >= productId) {
                productId = model.data.products[i].id + 1;
            }
        }
    }
    return productId;
}

function updateShoppingList(listId, productId) {
    let existingLink = getExistingLink(listId, productId);

    if (existingLink !== null) {
        existingLink.quantity = existingLink.quantity + 1;
    } else {
        let  newLinkId = generateNewLinkId();
        model.data.shoppingListProducts.push({
            id: newLinkId,
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
    }
}

function getExistingLink(listId, productId) {
    
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === listId &&
            model.data.shoppingListProducts[i].productId === productId) {
            return model.data.shoppingListProducts[i];
        }
    }
    return null;
}

function generateNewLinkId() {
    let  newLinkId = 1;
    

    if (model.data.shoppingListProducts.length > 0) {
        for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
            if (model.data.shoppingListProducts[i].id >= newLinkId) {
                newLinkId = model.data.shoppingListProducts[i].id + 1;
            }
        }
    }
    return newLinkId;
}

function deleteProduct(id) {
    
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === id) {
            model.data.products.splice(i, 1);
            setSaving();
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
            setSaving();
            updateView();
            return;
        }
    }
}

function setSaving() {
    model.app.isSaving = true;
    updateView();
    setTimeout(function() {
        saveModel();
        model.app.isSaving = false;
        updateView();
    }, 600);
}