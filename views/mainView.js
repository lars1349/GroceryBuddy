function updateView() {
    let currentView = '';
    const shouldShowFooter = model.app.currentUserId && !['login', 'createUser'].includes(model.app.currentPage);
    
    if (!model.app.currentUserId && model.app.currentPage !== 'login' && model.app.currentPage !== 'createUser') {
        model.app.currentPage = 'login';
    }
  
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
            currentView =  addFavoriteProductsViewContent() ;
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
      <header>
            <img src="/img/GroceryBuddy.png" alt="App Logo" ${model.app.currentUserId ? 'onclick="handleLogoClick()"' : ''} />
            <h1 class='logo' ${model.app.currentUserId ? 'onclick="handleLogoClick()"' : ''}>GroceryBuddy</h1>
            ${getWelcomeMessage()}
       </header>
        <main id="content">
            ${currentView}
        </main>

      ${shouldShowFooter ? `
    <footer>
        ${
            model.app.currentPage === 'home'
                ? `<button onclick="model.app.currentPage='newShoppingList'; updateView()">Lag ny</button>`
                : `<button onclick="goHome()">Hjem</button>`
        }
                <button onclick="model.app.currentPage='favouriteProducts'; goToFavoriteProducts(); updateView()">Favoritter</button>
                <button onclick="model.app.currentPage='history'; updateView()">Historie</button>
                <button onclick="model.app.currentPage='profile'; updateView()">Profil</button>
    </footer>
` : ''}
    `;
}
