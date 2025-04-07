function makeNewShoppingListView() {
    return /*HTML*/ `
        <h2>Ny handleliste</h2>
        <div class='shopping_list_container'>
            <input type='text' class='shopping_list_name' id='shopping_list_name' placeholder='Navn på handleliste'>
            <button onclick='addShoppingListName()'class='shopping_list_confirm' id='shopping_list_confirm'>
                Bekreft
            </button>
        </div>

        <div id='errorMessage' >
            ${model.app.errorMessage || ''}
        </div>
    `;
}