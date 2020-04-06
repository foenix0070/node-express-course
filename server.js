const express = require('express');
const app = express();

const mockUserData=[
  {name:'Jean'},
  {name:'Konan'}
  ];

  app.get('/users', function(req,res){
     res.json({
        success: true,
        message: 'Requête reussit!',
        users: mockUserData
     })
  })


app.listen(8000,function(){
    console.log("notre serveur tourne");
});

