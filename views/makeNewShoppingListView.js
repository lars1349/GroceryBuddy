function makeNewShoppingListView() {
    return /*HTML*/ `
        <h2>Ny handleliste</h2>
        <div class='shopping_list_container'>
        <div class='input-continer'>
        <input type='text' class='shopping_list_name' id='shopping_list_name' 
       placeholder='Navn på handleliste'
       onkeydown="if(event.key === 'Enter'){ event.preventDefault(); addShoppingListName(); }">

            <button onclick='addShoppingListName()'class='btn' id='shopping_list_confirm'>
                Bekreft
            </button></div>
        </div>

        <div id='errorMessage' >
            ${model.app.errorMessage || ''}
        </div>
    `;
}