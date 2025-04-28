function homeView() {
    const currentUserId = model.app.currentUserId;
    const shoppingLists = model.data.shoppingLists.filter(list => list.ownerUserId === currentUserId);

    let html = '<h2>Dine aktive handlelister:</h2>';

    const activeLists = shoppingLists.filter(list => {
        const history = model.data.shoppingListHistories.find(h => h.shoppingListId === list.id);
        return history?.isActive ?? true;
    });

    if (activeLists.length === 0) {
        html += `<br/><p>Ingen aktive handlelister.</p>`;
    } else {
        activeLists.forEach(list => {
            html += `
                <div class="open_shopping_list" onclick="openShoppingList(${list.id})">
                    ${list.name}
                </div>
            `;
        });
    }

    return html;
}