function homeView() {
    const currentUserId = model.app.currentUserId;
    const ownedLists = model.data.shoppingLists.filter(list => list.ownerUserId === currentUserId);
    const sharedListIds = model.data.shareCodes
        .filter(code => code.userId === currentUserId)
        .map(code => code.shoppingListId);

    const sharedLists = model.data.shoppingLists.filter(list => sharedListIds.includes(list.id));
    const allLists = [...ownedLists, ...sharedLists];

    let html = '<h2>Dine aktive handlelister:</h2>';

    const activeLists = allLists.filter(list => {
        const history = model.data.shoppingListHistories.find(h => h.shoppingListId === list.id);
        return history?.isActive ?? true;
    });

    if (activeLists.length === 0) {
        html += `<br/><p>Ingen aktive handlelister.</p>`;
    } else {
        activeLists.forEach(list => {
            const isShared = sharedListIds.includes(list.id);
            const owner = model.data.users.find(user => user.id === list.ownerUserId);
            const ownerName = owner?.username || 'Ukjent';

            html += `
                <div class="open_shopping_list" onclick="openShoppingList(${list.id})">
                    ${list.name}
                    ${isShared 
                        ? `<div class="shared-info">Delt med deg - eid av ${ownerName}</div>` 
                        : ''}
                </div>
            `;
        });
    }

    return html;
}
