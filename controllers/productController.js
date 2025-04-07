function addProduct() {
    
    let productNameInput = document.getElementById('productName');
    let productName = productNameInput.value.trim();

    
    if (productName === '') {
        alert('Produktnavnet kan ikke være tomt');
        return;
    }

    
    let listId = model.app.selectedShoppingListId;

    
    let existingProduct = getExistingProduct(productName);

    // Hent eller generer produkt-ID
    let productId = getProductId(existingProduct);

    //  Legg til nytt produkt hvis det ikke finnes
    if (existingProduct === null) {
        model.data.products.push({
            id: productId,
            name: productName,
            isChecked: false
        });
    }

    // Oppdater handlelisten med produktet
    updateShoppingList(listId, productId);

    
    productNameInput.value = '';
    setSaving();
    updateView();
}

function getExistingProduct(productName) {
    // Søk etter eksisterende produkt basert på navn (case-insensitive)
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].name.toLowerCase() === productName.toLowerCase()) {
            return model.data.products[i];
        }
    }
    
    return null;
}

function getProductId(existingProduct) {
    
    let productId = 1;

    // Bruk eksisterende ID hvis produktet finnes
    if (existingProduct !== null) {
        return existingProduct.id;
    }

    // Generer ny ID basert på høyeste eksisterende ID
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
    // Sjekk om produktet allerede er koblet til handlelisten
    let existingLink = getExistingLink(listId, productId);

    if (existingLink !== null) {
        // Øk antall hvis koblingen finnes
        existingLink.quantity += 1;
    } else {
        // Generer ny kobling-ID og legg til produktet
        let newLinkId = generateNewLinkId();
        model.data.shoppingListProducts.push({
            id: newLinkId,
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
    }
}

function getExistingLink(listId, productId) {
    // Finn eksisterende kobling mellom handleliste og produkt
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].shoppingListId === listId &&
            model.data.shoppingListProducts[i].productId === productId) {
            return model.data.shoppingListProducts[i];
        }
    }
    
    return null;
}

function generateNewLinkId() {
    
    let newLinkId = 1;

    // Generer ny ID basert på høyeste eksisterende kobling-ID
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
    
    let deletedIndex = -1;

    // Finn og fjern produktet
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === id) {
            deletedIndex = i;
            model.data.products.splice(i, 1);
            break;
        }
    }

    // Hvis et produkt ble fjernet, oppdater ID-er og koblinger
    if (deletedIndex !== -1) {
        
        for (let i = 0; i < model.data.products.length; i++) {
            model.data.products[i].id = i + 1;
        }

        // Oppdater handlelistekoblinger
        for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
            let link = model.data.shoppingListProducts[i];
            if (link.productId === id) {
                // Fjern koblingen hvis produktet ble slettet
                model.data.shoppingListProducts.splice(i, 1);
                i--; 
            } else if (link.productId > id) {
                
                link.productId -= 1;
            }
        }

        
        setSaving();
        updateView();
    }
}

function editProduct(id) {
    
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === id) {
            // Lag en kopi av produktet for redigering
            model.inputs.editProduct = { id: id, name: model.data.products[i].name };
            updateView();
            return;
        }
    }
}

function saveEditProduct() {
    // Oppdater produktnavnet etter redigering
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