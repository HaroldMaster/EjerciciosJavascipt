
//const EventEmmiter = require('events');
const Requiere = require('./logger');
const requiere = new Requiere();
//registro del listener
requiere.on('logeado', (arg) => {
    console.log('listener llamado', arg);
});
requiere.desplegar('kklpaj');
/* metodo 2 usando una variable en el exports del modulo
//const EventEmmiter = require('events');
const Requiere = require('./logger');
const requiere = new Requiere.loquesea();
//registro del listener
requiere.on('logeado', (arg) => {
    console.log('listener llamado', arg);
});
requiere.desplegar('kklpaj');
*/  
