

function saveModel() {
    localStorage.setItem('model', JSON.stringify(model));
}

function loadModel() {
    const saved = localStorage.getItem('model');
    if (saved) {
        Object.assign(model, JSON.parse(saved));
    }
}

function goHome() {
    if (!model.app.currentUserId) {
        model.app.currentPage = 'login';
    } else {
        model.app.currentPage = 'home';
    }
    updateView();
}

function getWelcomeMessage() {
    const currentUser = model.data.users.find(u => u.id === model.app.currentUserId);
    const hiddenOnPages = ['login', 'createUser'];
    const currentPage = model.app.currentPage;

    if (!currentUser || hiddenOnPages.includes(currentPage)) return '';
    return `<p class='velkommen'>Velkommen, ${currentUser.username}!</p>`;
}

function startApp() {
    loadModel();
    if (!model.data.users) {
        model.data.users = [];
    }
    restoreLoggedInUser();
    updateView();
}

