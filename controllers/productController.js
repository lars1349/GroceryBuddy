function addProduct() {
    let productNameInput = document.getElementById('productName');
    let productName = productNameInput.value.trim();

    if (productName === '') {
        alert('Produktnavnet kan ikke være tomt');
        return;
    }

    let currentListId = model.app.selectedShoppingListId;
    let existingProduct = getExistingProduct(productName);
    let productId = existingProduct ? existingProduct.id : getNextProductId();

    if (!existingProduct) {
        model.data.products.push({
            id: productId,
            name: productName,
            isChecked: false
        });
    }

    updateShoppingList(currentListId, productId);
    productNameInput.value = '';
    setSaving();
}

function getExistingProduct(productName) {
    let lowerName = productName.toLowerCase();
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].name.toLowerCase() === lowerName) {
            return model.data.products[i];
        }
    }
    return null;
}

function getNextProductId() {
    let maxId = 0;
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id > maxId) {
            maxId = model.data.products[i].id;
        }
    }
    return maxId + 1;
}

function updateShoppingList(listId, productId) {
    let existingLink = getExistingLink(listId, productId);

    if (existingLink) {
        existingLink.quantity += 1;
    } else {
        model.data.shoppingListProducts.push({
            id: getNextLinkId(),
            shoppingListId: listId,
            productId: productId,
            quantity: 1
        });
    }
}

function getExistingLink(listId, productId) {
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        let link = model.data.shoppingListProducts[i];
        if (link.shoppingListId === listId && link.productId === productId) {
            return link;
        }
    }
    return null;
}

function getNextLinkId() {
    let maxId = 0;
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].id > maxId) {
            maxId = model.data.shoppingListProducts[i].id;
        }
    }
    return maxId + 1;
}

function updateEditProductName(value) {
    if (model.inputs.editProduct) {
        model.inputs.editProduct.name = value;
    }
}

function editProduct(productId) {
    for (let i = 0; i < model.data.products.length; i++) {
        if (model.data.products[i].id === productId) {
            model.inputs.editProduct = {
                id: productId,
                name: model.data.products[i].name
            };
           // model.app.currentPage = 'addFavoriteProducts';
            updateView();
            return;
        }
    }
}

function saveEditProduct() {
    if (model.inputs.editProduct) {
        for (let i = 0; i < model.data.products.length; i++) {
            if (model.data.products[i].id === model.inputs.editProduct.id) {
                model.data.products[i].name = model.inputs.editProduct.name.trim();
                model.inputs.editProduct = null;

                setSavingAndThen(() => {
                    model.app.currentPage = 'addFavoriteProducts';
                    updateView();
                });
                return;
            }
        }
    }
}


function cancelEditProduct() {
    model.inputs.editProduct = null;
    model.app.currentPage = 'addFavoriteProducts';
    updateView();
}

function deleteProduct(productId) {
    let listId = model.app.selectedShoppingListId;
    let userId = model.app.currentUserId;

    let i = 0;
    while (i < model.data.shoppingListProducts.length) {
        let link = model.data.shoppingListProducts[i];
        if (link.shoppingListId === listId && link.productId === productId) {
            model.data.shoppingListProducts.splice(i, 1);
        } else {
            i++;
        }
    }

    i = 0;
    while (i < model.data.favoriteProducts.length) {
        let fav = model.data.favoriteProducts[i];
        if (fav.userId === userId && fav.productId === productId) {
            model.data.favoriteProducts.splice(i, 1);
        } else {
            i++;
        }
    }

    setSaving();
}

function toggleFavoriteProduct(productId) {
    let userId = model.app.currentUserId;

    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].userId === userId && model.data.favoriteProducts[i].productId === productId) {
            model.data.favoriteProducts.splice(i, 1);
            setSaving();
            return;
        }
    }

    let maxId = 0;
    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        if (model.data.favoriteProducts[i].id > maxId) {
            maxId = model.data.favoriteProducts[i].id;
        }
    }
    model.data.favoriteProducts.push({
        id: maxId + 1,
        userId: userId,
        productId: productId
    });

    setSaving();
}

function decreaseQuantity(linkId) {
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        let link = model.data.shoppingListProducts[i];
        if (link.id === linkId) {
            if (link.quantity > 1) {
                link.quantity -= 1;
            } else {
                model.data.shoppingListProducts.splice(i, 1);
            }
            setSaving();
            return;
        }
    }
}

function increaseQuantity(linkId) {
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        let link = model.data.shoppingListProducts[i];
        if (link.id === linkId) {
            link.quantity += 1;
            setSaving();
            return;
        }
    }
}

function toggleProductView() {
    let showProducts = model.app.showProducts || false;
    model.app.showProducts = !showProducts;
    updateView();
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

function showSuggestions(input) {
    const suggestionsContainer = document.getElementById('autocompleteList');
    suggestionsContainer.innerHTML = '';

    if (!input || input.trim() === '') return;

    const matches = model.data.products
        .filter(p => p.name.toLowerCase().startsWith(input.toLowerCase()))
        .slice(0, 5); 

    for (const match of matches) {
        const li = document.createElement('li');
        li.textContent = match.name;
        li.onclick = function () {
            document.getElementById('productName').value = match.name;
            suggestionsContainer.innerHTML = ''; 
        };
        suggestionsContainer.appendChild(li);
    }
}


function goToSettings() {
    model.app.currentPage = 'shoppingListSettings';
    updateView();
}

function setSavingAndThen(callback) {
    model.app.isSaving = true;
    updateView();

    setTimeout(function () {
        saveModel();
        model.app.isSaving = false;
        updateView();
        if (callback) callback();
    }, 600);
}

