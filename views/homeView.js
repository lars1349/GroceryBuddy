function homeView() {
    let html = '<h2>Dine handlelister</h2>';

    const shoppingLists = model.data.shoppingLists;

    for (const list of shoppingLists) {
        html += /*HTML*/ `
            <div style="border: 2px solid #66bb6a; width: 100%; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
                ${list.name}
            </div>
        `;
    }

    return html;
}
