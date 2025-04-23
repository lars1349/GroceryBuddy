

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
    model.app.currentPage = 'home';
    updateView();
}

function goToProductView() {
    model.app.currentPage = 'products';
    updateView();
}

function getWelcomeMessage() {
    const username = localStorage.getItem('username')?.trim();
    const hiddenOnPages = ['login', 'createUser'];
    const currentPage = model.app.currentPage;

    if (!username || hiddenOnPages.includes(currentPage)) return '';
    return `<p style="margin-left: 10px; font-size: 1.4em;">Velkommen, ${username}!</p>`;
}

