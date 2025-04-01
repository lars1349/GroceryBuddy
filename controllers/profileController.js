function logout() {
    model.app.currentUserId = null;
    model.app.currentPage = 'login';
    updateView();
}
