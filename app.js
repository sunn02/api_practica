const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());


const users = {
  juan: { name: 'juan', edad: 13 },
  maria: { name: 'Maria', edad: 15 }
};


// app.get('/users', (req, res) => {
//   res.json(users); // enviar respuesta al cliente en formato json
// });

app.get('/users/:user', (req, res) => {
      console.log("Parámetro recibido:", req.params.user);
      const username = req.params.user;
      const userData = users[username];
      if (userData){
        res.json(userData);
      }
      else {
        res.status(404).send('Usuario no encontrado'); 
      }

});


app.post('/user/:user'), (req, res) => {
  console.log("Parámetro recibido:", req.params.user);
  const userParam = req.params.user;
  const user = users[userParam];
  if (!user){
    users[userParam] = {};
  }
  else {
    res.json(user);
  }
}



app.listen(port);
