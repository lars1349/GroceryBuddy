function logout() {
    localStorage.removeItem('currentUserId')
    model.app.currentUserId = null;
    model.app.currentPage = 'login';
    updateView();
}

function ownedLists() {
    const currentUserId = model.app.currentUserId;
    const shoppingLists = model.data.shoppingLists;

    let html = '';

    const owned = shoppingLists.filter(list => 
        list.ownerUserId === currentUserId 
    );

    if (owned.length === 0) {
        html = `<p>Du har ingen aktive handlelister.</p>`;
    } else {
        html = '<ul>';
        for (const list of owned) {
            html += `<li>${list.name}</li>`;
        }
        html += '</ul>';
    }

    return html;
}



function sharedLists() {
    const currentUserId = model.app.currentUserId;
    const shoppingLists = model.data.shoppingLists;
    const shareCodes = model.data.shareCodes;

    let html = '';

    const sharedListIds = shareCodes
        .filter(code => code.userId === currentUserId)
        .map(code => code.shoppingListId);

    const sharedLists = shoppingLists.filter(list => sharedListIds.includes(list.id));

    if (sharedLists.length === 0) {
        html = `<p>Ingen delte lister funnet.</p>`;
    } else {
        html = '<ul>';
        for (const list of sharedLists) {
            html += `
                <li>
                    ${list.name}
                    <button class="leave-btn" onclick="leaveSharedList(${list.id})">Forlat liste</button>
                </li>
            `;
        }
        html += '</ul>';
    }

    return html;
}

function restoreLoggedInUser() {
    const savedUserId = localStorage.getItem('currentUserId');
    if (savedUserId) {
        const userExists = model.data.users.find(u => u.id == savedUserId);
        if (userExists) {
            model.app.currentUserId = parseInt(savedUserId);
        } else {
            model.app.currentUserId = null;
            localStorage.removeItem('currentUserId');
        }
    } else {
        model.app.currentUserId = null;
    }
}

function leaveSharedList(listId) {
    const confirmed = confirm("Er du sikker på at du vil forlate denne listen?");
    if (!confirmed) return;

    model.data.shareCodes = model.data.shareCodes.filter(code =>
        !(code.shoppingListId === listId && code.userId === model.app.currentUserId)
    );

    updateView(); 
}

function deleteCurrentUser() {
    const userId = model.app.currentUserId;
    if (!userId) return;

    model.data.users = model.data.users.filter(u => u.id !== userId);
    saveModel();
    logout();
}

function confirmDeleteUser(){
    if(confirm("Er du sikker på at du vil slette brukeren din?")) {
        deleteCurrentUser();
    }
}


