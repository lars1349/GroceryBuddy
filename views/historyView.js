function historyView() {
    let html = '<h2>Dine eldre handlelister</h2>';
    const currentUserId = model.app.currentUserId;
    const histories = model.data.shoppingListHistories;
    let hasHistory = false;

    for (const history of histories) {
        if (!history.isActive) {
            const list = model.data.shoppingLists.find(
                l => l.id === history.shoppingListId && l.ownerUserId === currentUserId
            );

            if (list) {
                hasHistory = true;
                html += /*HTML*/ `
                    <div 
                        onclick="openShoppingList(${list.id})"
                        class="history-shopping-list-html-style">
                        ${list.name} <br />
                        <small>Fullført: ${history.completedDate}</small>
                        <button class="btn"
                        onclick="toggleListActive(${list.id}, true)">Gjør aktiv</button>


                    </div>
                `;
            }
        }
    }

    if (!hasHistory) {
        html += `<p>Det finnes ingen handlelister i historikken.</p>`;
    }

    return html;
}
