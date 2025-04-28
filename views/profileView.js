function profileView() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
        return `<p>Bruker ikke funnet</p>`;
    }

    return /*HTML*/ `
        <div class="page-content-align-setup">
        
            <p><h2>Min profil:</h2></p><br/><br/>
            <p><strong>Brukernavn:</strong><br/>${username}</p><br/>
            <p><strong>E-post:</strong><br/>${email}</p><br/>
        
            <button class="logout-btn" onclick="logout()">Logg ut</button>
        </div>
    `;
}
