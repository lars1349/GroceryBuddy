const model = {
  app: {
    currentPage: 'login',
    errorMessage: '',
    showProducts :'',
    currentUserId: 1,
    selectedShoppingListId: null,
  },

  inputs: {
    
    login: {
      username: '',
      password: '',
    },

    register: {
      username: '',
      email: '',
      password: '',
    },

    newShoppingList: {
      titleName: '',
    },

    editShoppingList: {
      productName: '',
    },
  },

  data: {

    users: [
      { id: 1,
        username: 'Rebecka',
        email: 'rebecka@grocerybuddy.no',
        password: '123',
      },
      { id: 2,
        username: 'Roar',
        email: 'roar@grocerybuddy.no',
        password: '123',
      },
    ],

    loggedInUser: [
      {
        username: 'Rebecka',  
      },
      {
        username: 'Roar',  
      },
    ],

    shoppingLists: [
      {
        id: 1,
        name: 'Handleliste fredag',
        ownerUserId: 1,
        sharedWithUserId: 1,
        isFavorite: true,

      },
      {
        id: 2,
        name: 'min liste',
        ownerUserId: 2,
        sharedWithUserId: 2,
        isFavorite: false,
      },
    ],

    shoppingListProducts: [
      { id: 1, shoppingListId: 1, productId: 1, quantity: 2 },
      { id: 2, shoppingListId: 1, productId: 2, quantity: 1 },
      { id: 2, shoppingListId: 1, productId: 3, quantity: 1 },
      { id: 3, shoppingListId: 2, productId: 3, quantity: 5 },
    ],

    products: [
      { id: 1, name: 'Melk' },
      { id: 2, name: 'Brød' },
      { id: 3, name: 'Egg' },
      { id: 4, name: 'Ost' },
      { id: 5, name: 'Smør' },
      { id: 6, name: 'Kaffe' },
      { id: 7, name: 'Te' },
      { id: 8, name: 'Toalettpapir' },
      { id: 9, name: 'Kjøttdeig' },
      { id: 10, name: 'Pasta' },
      { id: 11, name: 'Ris' },
      { id: 12, name: 'Poteter' },
      { id: 13, name: 'Løk' },
      { id: 14, name: 'Tomater' },
      { id: 15, name: 'Eple' }
    ],
    

    shoppingListHistories: [
      {
        id: 1,
        shoppingListId: 1,
        completedDate: '2025-03-19',
        isActive: false,
      },
      {
        id: 2,
        shoppingListId: 2,
        completedDate: '2025-03-17',
        isActive: false,
      },
    ],

    favoriteProducts: [
      { id: 1, userId: 1, productId: 1 },
      { id: 1, userId: 1, productId: 2 },
      { id: 2, userId: 2, productId: 3 },
    ],

    shareCodes: [
      { id: 1, shoppingListId: 1, shareCode: 'abc123', userId: 2 },
      { id: 2, shoppingListId: 2, shareCode: 'xyz456', userId: 1 },
    ],
  },
};