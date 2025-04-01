function addProduct() {
    const productNameInput = document.getElementById('productName');
    const productName = productNameInput.value.trim();

    if (!productName) {
        alert('Produktnavnet kan ikke være tomt');
        return;
    }

    const listId = model.app.selectedShoppingListId;

    let existingProduct = model.data.products.find(p => p.name.toLowerCase() === productName.toLowerCase());


    let productId;
    if (existingProduct) {
        productId = existingProduct.id;
    } else {

        // Lag nytt produkt
        productId = model.data.products.length > 0
            ? Math.max(...model.data.products.map(p => p.id)) + 1
            : 1;

        model.data.products.push({
            id: productId,
            name: productName,
            isChecked: false
        });
    }

    // 2. Sjekk om produktet allerede er i denne handlelisten
    let existingLink = model.data.shoppingListProducts.find(
        p => p.shoppingListId === listId && p.productId === productId
    );

    if (existingLink) {
        // 3. Øk quantity
        existingLink.quantity += 1;
    } else {
        // 4. Lag ny kobling
        const newLinkId = model.data.shoppingListProducts.length > 0
            ? Math.max(...model.data.shoppingListProducts.map(p => p.id)) + 1
            : 1;

        model.data.shoppingListProducts.push({
            id: newLinkId,
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
    }

    productNameInput.value = '';
    setSaving();
    updateView();
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
    setTimeout(() => {
        saveModel();
        model.app.isSaving = false;
        updateView();
    }, 600); 
}
