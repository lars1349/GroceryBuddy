function createNewUserView() {
    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2 style="margin-bottom: 1rem;">Registrering ny bruker</h2>

            <form onsubmit="event.preventDefault(); whenCreateNewUserButtonIsClicked()"
                    class="login-and-create-user-style">
                <label for="newUsername">Brukernavn:</label>
                <input class="reg-input"  type="text" id="newUsername" name="username" />

                <label for="newEmail">Epost:</label>
                <input class="reg-input" type="text" id="newEmail" name="email" />

                <label for="newPassword">Passord:</label>
                <input class="reg-input" type="password" id="newPassword" name="password" />
                
                    <div id="outputMessage" style="margin-top: 1rem; color: red;"></div>

                <button type="submit" class="login-and-create-user-btn">Opprett bruker</button>
            </form>

            <button onclick="model.app.currentPage='login'; updateView()"
                    class="login-and-create-user-btn">Tilbake</button>
        </div>
    `;
}

