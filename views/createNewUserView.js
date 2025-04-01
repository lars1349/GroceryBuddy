createNewUserView();

function whenCreateNewUserButtonIsClicked() {
    
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        window.location.href = '';
    } else {
        document.getElementById('outputMessage').textContent = "Du må fylle ut begge felter.";
        document.getElementById('outputMessage').style.color = 'red';
    }
}

function createNewUserView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div>
        <h2>Registrering ny bruker:</h2>
    </div>
    <form id="registerNewUser">
                <label for="username">Velg brukernavn: </label>
                    <input type="text" id="newUsername" name="username" /><br/>
                <label for="password">Velg passord: </label>
                    <input type="password" id="newPassword" name="password" /><br/><br/>
            <div id="outputMessage"></div>
    </form>
    <div>
        <button onclick="whenCreateNewUserButtonIsClicked()">Opprett bruker</button>
    </div>
    `;
}