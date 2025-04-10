// userData skal bort etterhvert
const userData = {
    username: "Rebecka",
    password: "123",
};

function loginView() {
    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2 style="margin-bottom: 1rem;">Logg inn</h2>
            <form class="login-and-create-user-style">
                <label for="username">Brukernavn:</label>
                <input type="text" id="username" />
                
                <label for="password">Passord:</label>
                <input type="password" id="password" />
                
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