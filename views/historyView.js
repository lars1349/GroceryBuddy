function historyView() {
    const userId = model.app.currentUserId;
    const inactiveLists = getInactiveShoppingListsForUser(userId);

    let html = `<h2>Dine tidligere handlelister:</h2><br/>`;

    if (inactiveLists.length === 0) {
        html += `<p>Det finnes ingen handlelister i historikken.</p>`;
    } else {
        inactiveLists.forEach(list => {
            html += `
                <div>
                    <span>${list.name}</span>
                    <button class='btn' onclick="toggleListActive(${list.id}, true)">Gjør aktiv</button><br/>
                </div>
            `;
        });
    }

    return html;
}