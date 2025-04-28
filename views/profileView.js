function profileView() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
        return `<p>Bruker ikke funnet</p>`;
    }

    const ownedListsHtml = ownedLists();
    const sharedListsHtml = sharedLists();

    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2>Min profil</h2><br/>
            <p><strong>Brukernavn:</strong> ${username} | <strong>E-post:</strong> ${email}</p><br/>

            <h2 class="profile-section" >Mine handlelister:</h2>
            <ul class="profile-list">
            <li>${ownedListsHtml}</li>
            

            <br>

            <h2 class="profile-section-member">Medlem av :</h2>
            <ul class="profile-list">
            <li> ${sharedListsHtml}</li>
           

            <br/>
            <button class="logout-btn" onclick="logout()">Logg ut</button>
        </div>
    `;
}


