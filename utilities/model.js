const model = {
  app:{
    currentPage: "login",
    
    selectedListId: "",

    currentLoggedInUserId: 1,

    
  },
  
    inputs:{
      
      login: {
        email: "",
        password: "",
      },
      
      register: { 
        email: "",
        password: "",
      },

      overviewFeedShoppingLists: {
        // selectedListId: "",
      },

      newShoppingList: {
        name: "",
      },

      viewShoppingList: {
        shoppingListId: "",
      },
      
          editShoppingList: {
            inputProductName: "",
           
            //  mostBoughtProducts: "",
          },
  
          shoppingListHistoryOverview: {
            recentShoppingList: "",
    
          },

      addOrDeleteShoppingListHistory: {
        recentShoppingList: "",
      },

      shoppingListSettings: {
        shoppingListId: "",
      },
  
      shareShoppingListCodePage: {
        shoppingListId: "",
        
      },
  
      // favoriteProducts: {
      //    products: "",
      // },


      //   profile: {
      //   id: "",
      //   status: "",
      // },
      
    },
  
    data: {
      users: [
        { id: 1, email: "rebecka@getacademy.no", passWord: "***" },
        { id: 2, email: "roar@getacademy.no", passWord: "***" },
      ],
  

        // shoppingListId: [],

      shoppingLists: [
        {
          id: 1, name: "Handleliste fredag",
          ownerUserId: 1,
          sharedWithUserId: 1,
          isFavorite: true,
        },
        {
          id: 2,
          name: "min liste",
          ownerUserId: 2,
          sharedWithUserId: 2,
          isFavorite: false,
        },
      ],
  
      shoppingListProducts: [
        { id: 1, shoppingListId: 1, productId: 1, quantity: 2 },
        { id: 2, shoppingListId: 1, productId: 2, quantity: 1 },
        { id: 3, shoppingListId: 2, productId: 3, quantity: 5 },
      ],
  
      products: [
        { id: 1, name: "Brød" },
        { id: 2, name: "Fiskepinner" },
        { id: 3, name: "Melk" },
        { id: 4, name: "Brus" },
        { id: 5, name: "Skinke" },
        { id: 6, name: "Ost" },
      ],
  
      shoppingListHistories: [
        { id: 1, shoppingListId: 1, date: "2025-03-19", isActive: false },
        { id: 2, shoppingListId: 2, date: "2025-03-17", isActive: false },
      ],
      
  
      favoriteProducts: [
        { id: 1, userId: 1, productId: 1 },
        { id: 2, userId: 2, productId: 3 },
      ],
  
      shareCodes: [
        { id: 1, shoppingListId: 1, shareCode: "abc123", userId:2 }, //generer kode,
        { id: 2, shoppingListId: 2, shareCode: "xyz456", userId:1 },
      ],
      

    },
    

// mostBoughtProducts: [
//   { id:1, userId: 1, productId: 2 },
//   { id:2, userId: 2, productId: 4 },
// ],

  };

