function logout() {
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




function leaveSharedList(listId) {
    const confirmed = confirm("Er du sikker på at du vil forlate denne listen?");
    if (!confirmed) return;

    model.data.shareCodes = model.data.shareCodes.filter(code =>
        !(code.shoppingListId === listId && code.userId === model.app.currentUserId)
    );

    updateView(); 
}




