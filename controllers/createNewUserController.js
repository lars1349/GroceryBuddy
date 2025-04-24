function whenCreateNewUserButtonIsClicked() {
    
    let newUsername = document.getElementById('newUsername').value;
    let newEmail = document.getElementById('newEmail').value;
    let newPassword = document.getElementById('newPassword').value;

    const emailVertification = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (newUsername && newEmail && newPassword) {
        if (!emailVertification.test(newEmail)) {
            document.getElementById('outputMessage').textContent = "Du må skrive inn gyldig e-post adresse";
            document.getElementById('outputMessage').style.color = 'red';
            return;
        }

        if (newPassword.length < 8) {
            document.getElementById('outputMessage').textContent = "Passordet må minst være 8 tegn";
            document.getElementById('outputMessage').style.color = 'red';
            return;
        }

        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', newEmail);
        model.app.currentPage = 'home'; 
        updateView();

    } else {
        document.getElementById('outputMessage').textContent = "Du må fylle ut alle felter";
        document.getElementById('outputMessage').style.color = 'red';
    }
}