const model = {
  app: {
    currentPage: "login",

    pages: [
      "register",
      "overviewShoppingLists",
      "viewShoppingList",
      "CreateNewShoppingList",
      "editShoppingList",
      "historyOverview",
      "editHistory",
      "grocerySettings",
      "shareCodePage",
      "favoriteProducts",
      "profile",
    ],
  },

  inputs:{
    
    login: {
      email: "",
      password: "",
    },
    
    register: { 
      email: "",
      password: "",
      register: false,
    },

    overviewShoppingLists: {
      selectedListId: "",
      isActive: true,
      isFavorite: true,
    },
    
        viewShoppingList: {
          listId: "",
          products: [],
        },

    newShoppingList: {
      name: "",
      sharedWith: [],
      confirm: false,
    },

    editShoppingList: {
      listId: "",
      inputProductName: "",
       isActive: false,
       isFavorite: true,
       confirm: false,
       deleteProduct: false
    },

    historyOverview: {
      historyId:"",
      name: "",
      date: "",
    },

    editHistory: {
      historyId: "",
      name: "",
      isActive: false, // "history list to homePage",
      date: "",
      deleteProduct: false
    },

    profile: {
      id: "",
      status: "",
    },

    shoppingListSettings: {
      listId: "",
      deleteList: false,
      codeManagement: "",
      favoriteToggle: false,
      confirm: false,
      isActive: true,
    },

    shareCodePage: {
      listId: "",
      email: "",
      userId: "",
      shareCode: "",
      removeSharedUser: false,
    },

    favoriteProducts: {
      products: "",
    },
  },

  data: {
    users: [
      { id: 1, email: "rebecka@getacademy.no", passWord: "***" },
      { id: 2, email: "roar@getacademy.no", passWord: "***" },
    ],

    shoppingLists: [
      {
        id: 1, name: "Handleliste fredag",
        ownerId: 1,
        sharedWith: [2],
        isFavorite: true,
      },
      {
        id: 2,
        name: "min liste",
        ownerId: 2,
        sharedWith: [1],
        isFavorite: false,
      },
    ],

    shoppingListProducts: [
      { id: 1, listId: 1, productId: 1, quantity: 2 },
      { id: 2, listId: 1, productId: 2, quantity: 1 },
      { id: 3, listId: 2, productId: 3, quantity: 5 },
    ],

    products: [
      { id: 1, name: "Brød", isFavorite: false },
      { id: 2, name: "Fiskepinner", isFavorite: false },
      { id: 3, name: "Melk", isFavorite: false },
      { id: 4, name: "Brus", isFavorite: false },
      { id: 5, name: "Skinke", isFavorite: false },
      { id: 6, name: "Ost", isFavorite: false },
    ],

    historyList: [
      { id: 1, listId: 1, name: "Handleliste fredag", date: "onsdag 03.19", isActive: false },
      { id: 2, listId: 2, name: "min liste", date: "mandag 03.17", isActive: false },
    ],

    favoriteProducts: [
      { id: 1, userId: 1, productId: 1 },
      { id: 2, userId: 2, productId: 3 },
    ],

    shareCodes: [
      { id: 1, listId: 1, shareCode: "abc123" }, //generer kode,
      { id: 2, listId: 2, shareCode: "xyz456" },
    ],

    listShares:[
      {id: 1, listId: 1, userId: 2},
      {id: 2, listId: 2, userId: 1}
   ],
    profile: [{ id: 1, userId: 1, status: "logged_out" }],
  

    mostBoughtProducts: [
      { id:1, userId: 1, productId: 2 },
      { id:1, userId: 2, productId: 4 }
    ],
    
  },




};