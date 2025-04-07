function profileView() {
    const userId = model.app.currentUserId;
    const user = model.data.users.find(u => u.id === userId);

    if (!user) {
        return `<p>Bruker ikke funnet.</p>`;
    }

    return /*HTML*/ `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 70vh;
            text-align: center;
        ">
            <h2>Min profil</h2>
            <p><strong>Bruker-ID:</strong> ${user.id}</p>
            <p><strong>E-post:</strong> ${user.email}</p>

            <button onclick="logout()" style="
                margin-top: 2rem;
                padding: 0.5rem 1.5rem;
                background-color: #e57373;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">Logg ut</button>
        </div>
    `;
}
