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

                <button type="submit" class="create-new-user-btn">Opprett bruker</button>
            </form>

            <button onclick="model.app.currentPage='login'; updateView()"
                    class="create-new-user-btn">Tilbake</button>
        </div>
    `;
}

