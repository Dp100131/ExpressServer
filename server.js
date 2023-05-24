const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./Network/response')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => { 
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    });
    response.succes(req, res, 'Lista de mensajes.');
});

router.post('/message', (req, res) => {
    
    response.succes(req, res, 'Creado correctamente.');

});

router.delete('/message', (req, res) => {
    console.log(req.query)
    if(req.query.error === 'ok'){
        response.error(req, res, 'Error inesperado.', 500, 'Es solo una simulación de los errores.')
    }else{
        response.succes(req, res, 'Eliminado correctamente', 201);
    }
});

app.use('/app', express.static('public'))

app.listen(3000)

console.log('La app está escuchando en https://localhost:3000');