function makeNewShoppingList () {
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
  