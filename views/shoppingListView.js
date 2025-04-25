function shoppingListView() {
    const listId = model.app.selectedShoppingListId;
    const list = model.data.shoppingLists.find(function(l) {
        return l.id === listId;
    });
    const listProducts = model.data.shoppingListProducts.filter(function(p) {
        return p.shoppingListId === listId;
    });

    let html = `
      
        <h2>${list.name}</h2>
    `;

    if (listProducts.length === 0) {
        html += `<p>Ingen produkter i denne listen.</p>`;
    } else {
        html += `<ul class="product-list">`;

        for (let i = 0; i < listProducts.length; i++) {
            const item = listProducts[i];
            const product = model.data.products.find(function(p) {
                return p.id === item.productId;
            });

            if (product) {
                const quantity = item.quantity || 1;
                const isChecked = product.isChecked ? 'checked' : '';
                const checkedClass = product.isChecked ? 'checked-product' : '';

                html += `
                    <li class="${checkedClass}">
                        <input 
                            type="checkbox" 
                            onchange="toggleProductChecked(${product.id})"
                            ${isChecked}
                        >
                        ${product.name} - ${quantity} stk
                    </li>
                `;
            }
        }

        html += `</ul>`;
    }

    html += `
        <button class='btn' onclick="goHome()">← Tilbake</button>
        <button class='btn' onclick="goToProductView()">Rediger varer</button>
        <button class='btn' onclick="toggleListActive(${list.id}, true)">Gjør aktiv</button>
    `;

    return html;
}