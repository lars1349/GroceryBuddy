loginView();

const userData = {
    username: "Rebecka",
    password: "123",
};

function loginInput(username, password) {
    if (username === userData.username && password === userData.password) {
        window.location.href = 'logged_in.html';
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

function loginView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <form>
        <label for="username">Brukernavn: </label>
        <input type="text" id="username" name="username" /><br/>
        <label for="password">Passord: </label>
        <input type="password" id="password" name="password" /><br/><br/>
    </form>
    <div id="outputMessage"></div>
    <div>
        <button onclick="whenLoginButtonIsClicked()">Logg inn</button><br/><br/>
        <button>Opprett ny bruker</button>
    </div>
    `;
}