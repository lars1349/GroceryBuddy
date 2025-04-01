const userData = {
    username: "Rebecka",
    password: "123",
};

function loginView() {
    return /*HTML*/ `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 60vh;
            text-align: center;
        ">
            <h2 style="margin-bottom: 1rem;">Logg inn</h2>
            <form style="
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                align-items: center;
            ">
                <label for="username">Brukernavn:</label>
                <input type="text" id="username" />
                
                <label for="password">Passord:</label>
                <input type="password" id="password" />
                
                <button type="button" onclick="whenLoginButtonIsClicked()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    border: none;
                    background-color: #66bb6a;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                ">
                    Logg inn
                </button>
                <button type="button" onclick="createNewUserView()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    border: none;
                    background-color: #66bb6a;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                ">
                    Registrer ny bruker
                </button>
            </form>
            <div id="outputMessage" style="margin-top: 1rem;"></div>
        </div>
    `;
}






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

