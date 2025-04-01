function updateView() {
    let currentView = '';

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
            currentView = profilView();
            break;
        case 'home':
            currentView = homeView();
            break;
        case 'newShoppingList':
            currentView = makeNewShoppingList();
            break;
        case 'login':
            currentView = loginView();
            break;
        case 'favouriteProducts':
            currentView =favoriteProductsView();
            break;
        case 'settings':
            currentView =shoppingListsSettingsView();
            break;
        } 
                

    document.getElementById('app').innerHTML = /*HTML*/ `
        <header onclick="model.app.currentPage='home'; updateView()" style="cursor: pointer;">
            <img src="/img/GroceryBuddy.png" alt="App Logo" style="border-radius: 15px; width: 80px;" />
            <h1>GroceryBuddy</h1>
            
        </header>

        <main id="content">
            ${currentView}
        </main>

        <footer>
            <button onclick="model.app.currentPage='newShoppingList'; updateView()">Lag ny</button>
            <button onclick="model.app.currentPage='favouriteProducts'; updateView()">Favoritter</button>
            <button onclick="model.app.currentPage='history'; updateView()">Historie</button>
            <button onclick="model.app.currentPage='profile'; updateView()">Profil</button>
        </footer>
    `;
}
