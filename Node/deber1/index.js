const express = require('express');
const app = express();
const body_parser = require('body-parser');
app.use(express.json());
var contadorPersonaje = 0;
var mensaje= "";

const personajesDBZ = [
    {id:1 , nombre:'goku', poder:'kamekameha'},
    {id:2 , nombre:'picoro', poder: 'makankosapo'},
    {id:3 , nombre:'broly', poder: 'bolita verde'},
];
app.get('/api/personajesDBZ', (req , res) => {
    res.send(personajesDBZ);
    
 } );
 app.get('/apis/personajesDBZ/all', (req , res) => {
  
  
    for( contadorPersonaje=personajesDBZ.length; contadorPersonaje>=1; contadorPersonaje--){
        const personajes = personajesDBZ.find(p=> p.id==contadorPersonaje);
       mensaje = `el personaje ${personajes.nombre} tiene el poder ${personajes.poder}\t`;
                                                                      
       var nuevomensaje = todo.push(mensaje);
     
   };
   var cadena = todo.toString();
    res.send(cadena);
   todo =[];


} );
app.get('/api/personajesDBZ/:id', (req , res) => {
   const personajes = personajesDBZ.find(p=> p.id==req.params.id);
   if (!personajes) res.status(404).send('no existe el personaje');
   res.send(`el personaje ${personajes.nombre} tiene el poder ${personajes.poder}`);

   
} );
app.post('/api/personajesDBZ', (req, res) => {
    const personaje = {
        id: personajesDBZ.length + 1,
        nombre: req.body.name,
        poder: req.body.power
    };
    personajesDBZ.push(personaje);
    res.send(personaje);
});

const port = process.env.port||2500;
app.listen(port);