function shoppingListView() {
    const listId = model.app.selectedShoppingListId;
    const list = model.data.shoppingLists.find(l => l.id === listId);
    const listProducts = model.data.shoppingListProducts.filter(p => p.shoppingListId === listId);

    let html = `<h2>${list ? list.name : 'Min handleliste'}</h2>`;

    if (!listProducts) {
        html += `<p>Det er ingen varer i denne handlelisten</p>`;
    } else {
        html += `<ul class="product-list">`;
        listProducts.forEach(item => {
            const product = model.data.products.find(p => p.id === item.productId);
            if (product) {
                const quantity = item.quantity || 1;
                const isChecked = product.isChecked ? 'checked' : '';
                const checkedClass = product.isChecked ? 'checked-product' : '';

                html += `
                    <li class="${checkedClass}">
                        <input type="checkbox" onchange="toggleProductChecked(${product.id})" ${isChecked}>
                        ${product.name} - ${quantity} stk
                    </li>
                `;
            }
        });
        html += `</ul>`;
    }

    if (list && list.isActive === false) {
        html += `<button class='btn' onclick="toggleListActive(${list.id}, true)">Gjør aktiv</button>`;
    }

    html += `
        <button class='btn' onclick="goHome()">← Tilbake</button>
        <button class='btn' onclick="goToProductView()">Rediger varer</button>
        <button class='btn' onclick="toggleListActive(${list.id}, false); goHome();">Avslutt handel</button>
    `;

    return html;
}