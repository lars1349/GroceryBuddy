function profileView() {
    const user = model.data.users.find(u => u.id === model.app.currentUserId);

    if (!user) {
        return `<p>Bruker ikke funnet</p>`;
    }

    const ownedListsHtml = ownedLists();
    const sharedListsHtml = sharedLists();

   return /*HTML*/ `
        <div class="profile-container">

             <div class="profile-sidebar">
            <div class="profile-header">
            <h2>Min profil:</h2> 
            <button class="profile-button logout-button" onclick="logout()">Logg ut</button>
            <button class="profile-button delete-button" onclick="confirmDeleteUser()">Slett bruker</button>
            </div>
                            
                <p><strong>Brukernavn:</strong><br/>${user.username}</p><br/>
                <p><strong>E-post:</strong><br/>${user.email}</p><br/>

               
            </div>

            <div class="profile-main">
                <div class="profile-section">
                    <h2>Mine handlelister:</h2>
                    <ul class="profile-list">
                        ${ownedListsHtml}
                    </ul>
                </div>

                <div class="profile-section-member">
                    <h2>Medlem av:</h2>
                    <ul class="profile-list">
                        ${sharedListsHtml}
                    </ul>
                </div>
            </div>

        </div>
    `;
}

