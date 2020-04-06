const express = require('express');
const bodyParser = require('body-parser'); /*cette bibliotheque est necessaire pour traiter les donnees venant du corps d'une requête*/
const app = express();
app.use(bodyParser.json());

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

  app.post('/login', function(req, res){
    const username=req.body.username;
    const password=req.body.password;
  
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";
  
    if (username===mockUsername && password===mockPassword){
         res.json({
            success: true,
            message: 'utilisateur connecté!',
            token: 'brearer tokey5dhjg5gf8hfkhdfx1sdgl'
         });
    } else {
         res.json({
            success: false,
            message: 'Mot de passe ou login incorrect...'
         });
    }
  });

app.listen(8000,function(){
    console.log("notre serveur tourne");
});

