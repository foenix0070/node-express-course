const express = require('express');
const app = express();

const mockUserData=[
  {name:'Jean'},
  {name:'Konan'}
  ];

  app.get('/users', function(req,res){
     res.json({
        success: true,
        message: 'Requête reussie!',
        users: mockUserData
     });
  });

  app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
      success: true,
      message: 'get : cette action permet de recuperer le parametre',
      user: req.params.id
    });
  });


app.listen(8000,function(){
    console.log("notre serveur tourne");
});

