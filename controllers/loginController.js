function loginInput(username, password) {
    const user = model.data.users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('email', user.email);
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