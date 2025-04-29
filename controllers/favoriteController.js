
// Gjenbruk favorittproduktet med spesifisert mengde og valgt handleliste
function reuseFavoriteProduct(userId, productId, quantity) {
    let selectedListId = parseInt(document.getElementById(`select-list-${productId}`).value);
    if (!selectedListId) return;

    
    model.temp.selectedLists[productId] = selectedListId;

    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        let link = model.data.shoppingListProducts[i];
        if (link.shoppingListId === selectedListId && link.productId === productId) {
            link.quantity += quantity;
            setSaving();
            alert('Favorittproduktmengden ble oppdatert i handlelisten ✅');
            return;
        }
    }

    let nextLinkId = 0;
    for (let i = 0; i < model.data.shoppingListProducts.length; i++) {
        if (model.data.shoppingListProducts[i].id > nextLinkId) {
            nextLinkId = model.data.shoppingListProducts[i].id;
        }
    }

    model.data.shoppingListProducts.push({
        id: nextLinkId + 1,
        shoppingListId: selectedListId,
        productId: productId,
        quantity: quantity
    });

    setSaving();
    alert('Favorittproduktmengden ble oppdatert i handlelisten✅');
}


function removeFavoriteProduct(userId, productId) {
    let updatedFavorites = [];

    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        let favorite = model.data.favoriteProducts[i];
        if (favorite.userId === userId && favorite.productId === productId) continue;
        updatedFavorites.push(favorite);
    }

    if (updatedFavorites.length < model.data.favoriteProducts.length) {
        model.data.favoriteProducts = updatedFavorites;

        // Tildel ID-er på nytt
        for (let i = 0; i < model.data.favoriteProducts.length; i++) {
            model.data.favoriteProducts[i].id = i + 1;
        }

        setSaving();
        updateView();
    }
}

function increaseFavoriteProduct(userId, productId) {
    let quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;

    
    model.temp.favoriteQuantities[productId] = quantity;
}


function decreaseFavoriteProduct(userId, productId) {
    let quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
    }


    model.temp.favoriteQuantities[productId] = quantity;
}

function goToFavoriteProducts() {
    
    model.temp.favoriteQuantities = {};
    model.temp.selectedLists = {};
   
}

function goBack() {
    model.app.currentPage = 'home';
   
     model.temp.favoriteQuantities = {};
     model.temp.selectedLists = {};
     updateView();
    }
    
// Initialiser midlertidig lagring for mengder og valgte lister
model.temp = {
    favoriteQuantities: {}, 
    selectedLists: {} 
};
