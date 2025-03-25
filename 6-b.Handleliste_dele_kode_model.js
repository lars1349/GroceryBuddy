// en test, to tester, tre tester

const model = {
    app: {
        currentPage: 'shareCodePage',
        currentListId: 1,
    },
    inputs: {
        userInfo:{
        email:'',
        userName: '',
        removeBuddy:false
        
    },
      
    },

    data: {
        sharedUsers: [
            {
            shareCode: null,
            sharedWith: ['roar@getacademy.no'],
        }
    ],
        users: [
          
            { id: 1, userName:'Rebecka2000', userEmail: 'rebecka@getacademy.no', },
            { id: 2,userName: 'SuperRoar', userEmail: 'roar@getacademy.no'},
    
        ],
    }
};