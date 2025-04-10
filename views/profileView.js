function profileView() {
    const userId = model.app.currentUserId;
    const user = model.data.users.find(u => u.id === userId);

    if (!user) {
        return `<p>Bruker ikke funnet.</p>`;
    }

    return /*HTML*/ `
        <div class="page-content-align-setup">
            <h2>Min profil</h2>
            <p><strong>Bruker-ID:</strong> ${user.id}</p>
            <p><strong>E-post:</strong> ${user.email}</p>

            <button class="logout-btn" onclick="logout()">Logg ut</button>
        </div>
    `;
}
