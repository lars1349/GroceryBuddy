function shoppingListView() {
    const listId = model.app.selectedShoppingListId;
    const list = model.data.shoppingLists.find(l => l.id === listId);
    const listProducts = model.data.shoppingListProducts.filter(p => p.shoppingListId === listId);

    let html = `<h2>${list.name}</h2>`;

    if (listProducts.length === 0) {
        html += `<p>Ingen produkter i denne listen.</p>`;
    } else {
        html += `<ul>`;
        for (const item of listProducts) {
            const product = model.data.products.find(p => p.id === item.productId);
            if (product) {
                const quantity = item.quantity || 1; // fallback i tilfelle quantity mangler
                html += `<li>${product.name} - ${quantity} stk</li>`;
            }
        }
        html += `</ul>`;
    }

    html += `<button onclick="goHome()">← Tilbake</button>`;
    

    return html;
}
