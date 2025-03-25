// (1-A) LOGIN MODEL
const model = {
    app: {
        currentPage: 'login',

          pages: [
            "overviewShoppingLists",
            "createNewShoppingList",

            "viewShoppingList",

            "profile",
        ],
    },

    inputs: {

    //  LOGIN
        login:{
        email:'',
        passWord:'',
        },

    // (2-A) OVERVIEW / HOMEPAGE
           overviewShoppingLists: {
            selectedListId: '',  // myList: '' 
        },

        newShoppingList: {
            name: '',
            sharedWith: [],  // List of user IDs 
            confirm: false,
            
        },

    // (3) SKRIVE SHOPPING LIST


    },

    //  USERS
        data: {
            users: [
            {
                id: 1,
                name: 'Rebecka',
                email: 'rebecka@team3.no',
                password: '*****',
                
            },
            {
                id: 2,
                name: 'Rebecka2',
                email: 'rebecka2@team3.no',
                password: '*****',
                
            }
        ],

// (4-A) VIEW SHOPPINGLISTS
        shoppingLists: [
            { id: 1, name: "Weekly Groceries", ownerId: 1, sharedWith: [2] },
            { id: 2, name: "Birthday Party Supplies", ownerId: 2, sharedWith: [1] },
        ],

        shoppingListItems: [
            { id: 1, listId: 1, productId: 1, quantity: 2 },
            { id: 2, listId: 1, productId: 2, quantity: 1 },
            { id: 3, listId: 2, productId: 3, quantity: 5 },
        ],

        products: [
            { name: 'Brød', id: 1, },
            { name: 'Fiskepinner', id: 2, },
            { name: 'Melk', id: 3, },
            { name: 'Brus', id: 4, },
            { name: 'Skinke', id: 5, },
            { name: 'Ost', id: 6, },
        ]
},

    // PROFILE
         profile: [   
        { id: 2, userId: 1, status: "logged_out" },
       ],


};