function homeView() {
    const currentUserId = model.app.currentUserId;
    const shoppingLists = model.data.shoppingLists;


    const hasAnyList = shoppingLists.some(list => list.ownerUserId === currentUserId);
    if (!hasAnyList) return '<p>Du har ingen handlelister ennå.</p>';

    let html = '<h2>Dine aktive handlelister</h2>';

    for (const list of shoppingLists) {
        const history = model.data.shoppingListHistories.find(h => h.shoppingListId === list.id);
        const isActive = history?.isActive ?? true;

        if (list.ownerUserId === currentUserId && isActive) {
            html += /*HTML*/ `
                <div class="open_shopping_list" 
                    onclick="openShoppingList(${list.id})">
                    ${list.name}
                </div>
            `;
        }
    }

    return html;
}
