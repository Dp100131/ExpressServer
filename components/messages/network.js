const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../Network/response')

router.get('/', (req, res) => { 
    controller.getMessages()
        .then((messageList) =>{
            response.succes(req, res, messageList, 200)
        })
        .catch(() => {
            response.error(req, res, 'Unexpected Error.', 500, e)
        })
});

router.post('/', (req, res) => {

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.succes(req, res, fullMessage, 201);
    })
    .catch(() => {
        response.error(req, res, 'Información inválida.', 400, 'Error en el controller.')
    }) 
});


module.exports = router;