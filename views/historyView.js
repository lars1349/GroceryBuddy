function historyView() {
    let html = '<h2>Dine eldre handlelister</h2>';
    const currentUserId = model.app.currentUserId;
    const histories = model.data.shoppingListHistories;
    let hasHistory = false;

    for (const history of histories) {
        const list = model.data.shoppingLists.find(
            l => l.id === history.shoppingListId && l.ownerUserId === currentUserId
        );

        if (list) {
            hasHistory = true;
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
                    ${list.name} <br />
                    <small>Fullført: ${history.completedDate}</small>
                </div>
            `;
        }
    }

    if (!hasHistory) {
        html += `<p>Det finnes ingen handlelister i historikken.</p>`;
    }

    return html;
}
