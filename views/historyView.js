function historyView() {
    const currentUserId = model.app.currentUserId;
    const inactiveLists = getInactiveShoppingListsForUser(currentUserId);

    let html = '<h2>Dine eldre handlelister</h2>';

    if (inactiveLists.length === 0) {
        html += `<p>Det finnes ingen handlelister i historikken.</p>`;
        return html;
    }

    for (const list of inactiveLists) {
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
                <small>Fullført: ${list.completedDate}</small>
                <button onclick="toggleListActive(${list.id}, true)">Gjør aktiv</button>
            </div>
        `;
    }

    return html;
}
