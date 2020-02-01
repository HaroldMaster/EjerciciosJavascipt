const express = require('express');
const app = express();
const Joi = require('joi');//Joy con mayúscula xq retorna una clase
app.use(express.json());
const cursos = [
    { id:1, nombre:'matemáticas'},
    { id:2, nombre:'ingles'},
    { id:3, nombre:'programación'}, 
];/*
app.get('/goku', (req,res) => {
res.send('hola soy goku');
});
app.get('/', (req,res) => {
    res.send('hola soy la raiz');
    });
app.get('/api/personajes/:id', (req,res) => {
    res.send(req.params.id);
    });
/*app.get('/api/:anio/:mes', (req,res) => {
    res.send(req.params);
    });*/
/*app.get('/api/:anio/:mes', (req,res) => {
    res.send(req.params.mes);
    });*/
app.get('/api/cursos/:id', (req, res) => {
   
    console.log(req.params.id);
    const curso = cursos.find(c => c.id == req.params.id); // c es del promrama y req.params es del navegador
    /*const parametrosURL= req.params.id;
    console.log(parametrosURL);
    const schemaGet = {
        parametrosURL: Joi.string().min(1).required()
    };
    const resultadoget= Joi.validate(req.url, schemaGet);*/
    
    if (!curso) res.status(404).send('curso no encontrado..');
    //if(!parametrosURL || parametrosURL==null) res.status(400).send('no se ha consultado ningun curso');
    res.send(curso);
});
app.post('/api/cursos', (req, res) => {
    const schema = {
        nom: Joi.string().min(3).required()
    };
    const resultado=Joi.validate(req.body, schema);
    console.log(resultado);
    if(resultado.error){
        res.status(400).send(resultado.error.details[0].message);
        return;
    }
    const curso = {
        id: cursos.length + 1,
        nombre: req.body.nom,
    };
    cursos.push(curso);
    res.send(curso);
});
const port = process.env.port||3000
    app.listen(port, () => console.log(`escuchando en el puerto ${port}`));