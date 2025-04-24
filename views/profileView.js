function profileView() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
        return `<p>Bruker ikke funnet</p>`;
    }

    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2>Min profil</h2><br/>
            <p><strong>Brukernavn:</strong> ${username}</p><br/>
            <p><strong>E-post:</strong> ${email}</p>

            <button class="logout-btn" onclick="logout()">Logg ut</button>
        </div>
    `;
}
