function loginInput(username, password) {
    if (username === userData.username && password === userData.password) {
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
