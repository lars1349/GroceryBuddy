// 

const model = {
    app: {
        currentPage: 'shareCodePage',
        currentListId: 1,
    },

    inputs: {
        userInfo:{
        email:'',
       
        removeBuddy:false
    },
      
    },

    data: {
        sharedUsers: [
            {
            shareCode: null, //generer kode
            sharedWith: ['roar@getacademy.no'],
        }
    ],
        users: [
          
            { id: 1, email: 'rebecka@getacademy.no'},
            { id: 2, email: 'roar@getacademy.no'},
    
        ],
    }
};
