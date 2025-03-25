const model = {
    app: {
        currentPage: 'CreateNewShoppingList', 

        pages: [
            "login",
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

        profile: {
            updatePicture: '',
        },
    },

    data: {
        users: [
            {
                id: 1,
                name: 'Rebecka',
                email: 'rebecka@team3.no',
                password: '*****',
                profilePicture: 'rebecka.jpg',
            },
            {
                id: 2,
                name: 'Rebecka2',
                email: 'rebecka2@team3.no',
                password: '*****',
                profilePicture: 'rebecka2.jpg',
            }
        ],

        shoppingLists: [
            { id: 1, name: "Weekly Groceries", ownerId: 1, sharedWith: [2] },
            { id: 2, name: "Birthday Party Supplies", ownerId: 2, sharedWith: [] },
        ],

        shoppingListItems: [
            { id: 1, listId: 1, itemId: 1, quantity: 2 },
            { id: 2, listId: 1, itemId: 2, quantity: 1 },
            { id: 3, listId: 2, itemId: 3, quantity: 5 },
        ],

        items: [
            { id: 1, name: "Milk", category: "groceries", price: 20, image: "milk.jpg" },
            { id: 2, name: "Bread", category: "groceries", price: 15, image: "bread.jpg" },
            { id: 3, name: "Balloons", category: "birthday party", price: 50, image: "balloons.jpg" },
        ],

        authentication: [   // Or profile 
            { id: 1, userId: 1, status: "logged_in", lastLogin: "2025-03-24" },
            { id: 2, userId: 2, status: "logged_out", lastLogin: "2025-03-20" },
        ],
    },
};
