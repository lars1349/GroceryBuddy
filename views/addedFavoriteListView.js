// function addedFavoriteListView() {
//     let selectedListId = model.app.selectedShoppingListId;
//     let listName = 'Ukjent liste';

//     for (let i = 0; i < model.data.shoppingLists.length; i++) {
//         if (model.data.shoppingLists[i].id === selectedListId) {
//             listName = model.data.shoppingLists[i].name;
//             break;
//         }
//     }

//     return `
//       <h2>Din liste: ${listName}</h2>
//         <div class="product-input-group">   
//             </div>
//             <table class="product-table">
//                 <tr>
//                     <th>Antall</th>
//                     <th>Navn</th>
//                     <th></th>
//                 </tr>
//                 ${createProductTableRows(true)}
//             </table>
       
//     `;
// }
