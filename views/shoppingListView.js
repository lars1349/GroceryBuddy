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
            html += `<li>${product.name} – ${item.quantity} stk</li>`;
        }
        html += `</ul>`;
    }

    html += `<button onclick="goHome()">← Tilbake</button>`;

    return html;
}

function shoppingListView () {
  return /*HTML*/ `
    shoppinglist feed  works!

     <div id='shopping_list_container'>
             <input type='text' name='' id='shopping_list_name'>
             <button onclick='addShoppingListName()' id='shopping_list_confirm'>
              Bekrefte</button>
 
        </div>

        <div id='errorMessage' style="color: red; margin-top: 5px;">
          ${model.app.errorMessage || ''}
        </div>

    `
}

function addShoppingListName () {
  let nameInput = document.getElementById('shopping_list_name').value


  if(!nameInput){

    model.app.errorMessage = '⚠️ Du må skrive inn et navn før du kan bekrefte! ';
    updateView()
    return;
  }

  model.app.errorMessage = '';
  model.app.shoppingList = nameInput;
  model.app.currentPage = 'products'


  updateView();
}
