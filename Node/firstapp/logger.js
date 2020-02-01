const EventEmmiter = require('events');
class Logger extends EventEmmiter {
    desplegar(mensaje){
        console.log(mensaje);
        this.emit('logeado',{id:1, url:'https://ecuador4fun.com'});
    }
}

module.exports= Logger;
//module.exports.loquesea = desplegar; exports del metodo 2 del app.js
//exports.loquesea= desplegar;
//exports= desplegar; -> no se puede escribir de esta manera debido a que el exports es una referencia al módulo y eso no lo podemos cambiar, solo las tres maneras de arriba estan correctas
/*
const EventEmmiter = require('events');
class logger*/