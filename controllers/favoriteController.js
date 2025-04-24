function removeFavoriteProduct(userId, productId) {
    let updatedFavorites = [];

    for (let i = 0; i < model.data.favoriteProducts.length; i++) {
        let favorite = model.data.favoriteProducts[i];
        if (favorite.userId === userId && favorite.productId === productId) {
            continue;
        }
        updatedFavorites.push(favorite);
    }

    if (updatedFavorites.length < model.data.favoriteProducts.length) {
        model.data.favoriteProducts = updatedFavorites;

        for (let i = 0; i < model.data.favoriteProducts.length; i++) {
            model.data.favoriteProducts[i].id = i + 1;
        }

        setSaving();
    }
}

function goBack() {
    model.app.currentPage = 'home';
    updateView();
}