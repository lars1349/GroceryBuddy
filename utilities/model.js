const model = {
    app: {
        currentPage: 'login', 

        pages: [
            'CreateNewShoppingList',
            "overviewShoppingLists",
            "createNewShoppingList",
            "profile",
        ],
    },

    inputs: {
        login: {
            email: '',
            password: '',
        },

        overviewShoppingLists: {
            selectedListId: '',  // myList: ''
            
        },

        newShoppingList: {
            name: '',
            sharedWith: [],  // List of user IDs 
            confirm: false,
            
        },

        profile:{
            id: '',
            status: ''
        },

        
    },

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
            { id: 1, name: "Milk" },
            { id: 2, name: "Bread" },
            { id: 3, name: "Balloons" },
        ],

        profile: [   
         { id: 2, userId: 1, status: "logged_out" },
        ],
    },
};
