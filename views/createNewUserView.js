function createNewUserView() {
    return /*HTML*/ `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 60vh;
            text-align: center;
        ">
            <h2 style="margin-bottom: 1rem;">Registrering ny bruker</h2>

            <form onsubmit="event.preventDefault(); whenCreateNewUserButtonIsClicked()" style="
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                align-items: center;
            ">
                <label for="newUsername">Brukernavn:</label>
                <input type="text" id="newUsername" name="username" />

                <label for="newPassword">Passord:</label>
                <input type="password" id="newPassword" name="password" />
                
                    <div id="outputMessage" style="margin-top: 1rem; color: red;"></div>

                <button type="submit" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background-color: #66bb6a;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                ">Opprett bruker</button>
            </form>

            <button onclick="model.app.currentPage='login'; updateView()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background-color: #66bb6a;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                ">Tilbake</button>
        </div>
    `;
}

