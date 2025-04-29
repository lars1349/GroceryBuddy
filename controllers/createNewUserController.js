function whenCreateNewUserButtonIsClicked() {
    let newUsername = document.getElementById('newUsername').value.trim();
    let newEmail = document.getElementById('newEmail').value.trim();
    let newPassword = document.getElementById('newPassword').value.trim();

    const emailVerification = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (newUsername && newEmail && newPassword) {
        if (!emailVerification.test(newEmail)) {
            document.getElementById('outputMessage').textContent = "Du må skrive inn gyldig e-postadresse";
            document.getElementById('outputMessage').style.color = 'red';
            return;
        }

        if (newPassword.length < 8) {
            document.getElementById('outputMessage').textContent = "Passordet må minst være 8 tegn";
            document.getElementById('outputMessage').style.color = 'red';
            return;
        }

        const existingUser = model.data.users.find(u => u.username === newUsername || u.email === newEmail);
        if (existingUser) {
            document.getElementById('outputMessage').textContent = "Brukernavn eller e-post er allerede registrert.";
            document.getElementById('outputMessage').style.color = 'red';
            return;
        }

       
        const newId = model.data.users.length > 0 
            ? Math.max(...model.data.users.map(u => u.id)) + 1 
            : 1;

        model.data.users.push({
            id: newId,
            username: newUsername,
            email: newEmail,
            password: newPassword,
        });

        saveModel();
        model.app.currentUserId = newId;
        localStorage.setItem('currentUserId', newId);
        model.app.currentPage = 'home';
        updateView();

    } else {
        document.getElementById('outputMessage').textContent = "Du må fylle ut alle felter";
        document.getElementById('outputMessage').style.color = 'red';
    }
}
