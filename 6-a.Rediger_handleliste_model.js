// en test, to tester, tre tester


const model = {
    app: {
        currentPage: 'grocerySettings',
        currentListId: 1,
    },
    inputs: {
        deleteList: false,
        favoriteToggle: false,
        
        //lag code
    },
        
  
      
    data: {
        groceryLists: [
          {
            id: 1,
            name: 'Handleliste "fredag"',
            isFavorite: false,
            groceries: [ ],
          
            
        },
            
              
             
           
            
          
        ],   
        favoriteGroceries: [             // Favorittliste.model
            { id: 'melk', name: 'Melk' },
            { id: 'brød', name: 'Brød' },
            { id: 'egg', name: 'Egg' }
        ]
      }
    };