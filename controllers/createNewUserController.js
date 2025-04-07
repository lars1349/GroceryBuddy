function whenCreateNewUserButtonIsClicked() {
    
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        model.app.currentPage = 'home'; 
        updateView();
    } else {
        document.getElementById('outputMessage').textContent = "Du må fylle ut begge felter.";
        document.getElementById('outputMessage').style.color = 'red';
    }
}