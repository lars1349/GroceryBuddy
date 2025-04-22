function whenCreateNewUserButtonIsClicked() {
    
    let newUsername = document.getElementById('newUsername').value;
    let newEmail = document.getElementById('newEmail').value;
    let newPassword = document.getElementById('newPassword').value;

    if (newUsername && newEmail && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', newEmail);
        model.app.currentPage = 'home'; 
        updateView();
    } else {
        document.getElementById('outputMessage').textContent = "Du må fylle ut begge felter.";
        document.getElementById('outputMessage').style.color = 'red';
    }
}