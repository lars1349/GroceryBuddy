
function updateView() {
    let currentView = '';

    switch(model.app.currentPage) {
        case 'login': 
            currentView = userView();
            break;
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
    
}

    document.getElementById('app').innerHTML = /*HTML*/ `
      
            <header onclick="model.app.currentPage='home'; updateView()" style="cursor: pointer;">
    <img src="logo.png" alt="App Logo" />
    <h1>GroceryBuddy</h1>
</header>

        </header>

        <main id="content">
            ${currentView}
        </main>

        <footer>
            <button onclick="model.app.currentPage='shoppingListView'; updateView()">Lag ny</button>
            <button onclick="model.app.currentPage='products'; updateView()">Favoritter</button>
            <button onclick="model.app.currentPage='history'; updateView()">Historie</button>
            <button onclick="model.app.currentPage='profile'; updateView()">Profil</button>
        </footer>
    `;
}