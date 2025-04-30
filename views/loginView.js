function loginView() {
    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2 style="margin-bottom: 1rem;">Logg inn</h2>
            <form class="login-and-create-user-style" method="POST">
                <label for="username">Brukernavn:</label>
                <input class="login-input"  type="text" id="username" name="username" autocomplete="username" required>
                
                <label for="password">Passord:</label>
                <input class="login-input" type="password" id="password" name="password" autocomplete="current-password" required>
                
                    <div id="outputMessage" style="margin-top: 1rem;"></div>

                <button type="button" onclick="whenLoginButtonIsClicked()"
                class="login-and-create-user-btn">
                    Logg inn
                </button>
                

                <button type="button" onclick="model.app.currentPage='createUser'; updateView()"
                        class="login-and-create-user-btn">
                    Opprett ny bruker
                </button>
            </form>
        </div>
    `;
}