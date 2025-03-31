function homeView() {
    let html = '<h2>Dine handlelister</h2>';
    const currentUserId = model.app.currentUserId;
    const shoppingLists = model.data.shoppingLists;

    for (const list of shoppingLists) {
        if (list.ownerUserId === currentUserId) {
            html += /*HTML*/ `
                <div 
                    onclick="openShoppingList(${list.id})"
                    style="
                        border: 2px solid #66bb6a; 
                        padding: 1rem; 
                        margin-top: 1rem; 
                        border-radius: 8px; 
                        cursor: pointer;
                    ">
                    ${list.name}
                </div>
            `;
        }
    }

    return html;
}
