function updateView() {
    let currentView = '';
    const hideFooterPages = ['login', 'createUser'];
    const shouldShowFooter = !hideFooterPages.includes(model.app.currentPage);

    switch (model.app.currentPage) {
        case 'history':
            currentView = historyView();
            break;
        case 'mainView':
            currentView = mainView();
            break;
        case 'shareCode':
            currentView = shareCodeView();
            break;
        case 'shoppingListView':
            currentView = shoppingListView();
            break;
        case 'products':
            currentView = productView();
            break;
        case 'profile':
            currentView = profileView();
            break;
        case 'home':
            currentView = homeView();
            break;
        case 'newShoppingList':
            currentView = makeNewShoppingListView();
            break;
        case 'login':
            currentView = loginView();
            break;
        case 'favouriteProducts':
            currentView = favoriteProductsView();
            break;
        case 'addFavoriteProducts':
            currentView = addFavoriteProductsViewContent() ;
            break;
        case 'addedFavoriteListView':
            currentView = addedFavoriteListView() ;
            break;
        case 'shoppingListSettings':
            currentView = shoppingListsSettingsView();
            break;
        case 'createUser':
            currentView = createNewUserView(); 
            break;
            
        } 
        

        
    document.getElementById('app').innerHTML = /*HTML*/ `
        <header onclick="model.app.currentPage='home'; updateView()" style="cursor: pointer;">
            <img src="/img/GroceryBuddy.png" alt="App Logo" style="border-radius: 15px;" />
            <h1 class='logo' >GroceryBuddy</h1>
            ${getWelcomeMessage()}
        </header>

        <main id="content">
            ${currentView}
        </main>

        ${shouldShowFooter ? `
            <footer>
             ${ ['newShoppingList', 'products'].includes(model.app.currentPage)
                ? `<button onclick="goHome()">Hjem</button>`
                 : `<button onclick="model.app.currentPage='newShoppingList'; updateView()">Lag ny</button>`}
                 <button onclick="model.app.currentPage='favouriteProducts'; updateView()">Favoritter</button>
                <button onclick="model.app.currentPage='history'; updateView()">Historie</button>
                <button onclick="model.app.currentPage='profile'; updateView()">Profil</button>
            </footer>
        ` : ''}
        
    `;
}

