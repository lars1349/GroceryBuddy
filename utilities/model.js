const model = {
  app: {
    currentPage: "login",
  },

  inputs: {
    login: {
      email: "",
      password: "",
    },

    register: {
      email: "",
      password: "",
    },

    newShoppingList: {
      titleName: "",
    },

    editShoppingList: {
      productName: "",
    },
  },

  data: {
    users: [
      { id: 1, email: "rebecka@getacademy.no", passWord: "***" },
      { id: 2, email: "roar@getacademy.no", passWord: "***" },
    ],

    shoppingLists: [
      {
        id: 1,
        name: "Handleliste fredag",
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
      {
        id: 1,
        shoppingListId: 1,
        completedDate: "2025-03-19",
        isActive: false,
      },
      {
        id: 2,
        shoppingListId: 2,
        completedDate: "2025-03-17",
        isActive: false,
      },
    ],

    favoriteProducts: [
      { id: 1, userId: 1, productId: 1 },
      { id: 2, userId: 2, productId: 3 },
    ],

    shareCodes: [
      { id: 1, shoppingListId: 1, shareCode: "abc123", userId: 2 },
      { id: 2, shoppingListId: 2, shareCode: "xyz456", userId: 1 },
    ],
  },

  
};
