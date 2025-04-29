function loginInput(username, password) {
    const user = model.data.users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUserId', user.id);
        model.app.currentUserId = user.id; 
        model.app.currentPage = 'home'; 
        updateView();
    } else {
        document.getElementById('outputMessage').textContent = "Feil brukernavn eller passord. Prøv igjen.";
        document.getElementById('outputMessage').style.color = 'red';
    }
}


function whenLoginButtonIsClicked() {
    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;

    loginInput(enteredUsername, enteredPassword);
};

function handleLogoClick() {
    const user = model.data.users.find(u => u.id === model.app.currentUserId);
    if (user && model.app.currentUserId) {

        model.app.currentPage = 'home';
    } else {
        model.app.currentUserId = null; 
        model.app.currentPage = 'login';
    }
    updateView();
}