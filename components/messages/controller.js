const {add, list} = require('./store')

function addMessage(user, message) {

    return new Promise((resolve, reject) => {

        if(!user || !message){

            console.error('[Message controller] No hay usuario o mensaje.');
            return reject('Los datos son incorrectos');

        }else{
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }
            add(fullMessage)
            return resolve(fullMessage)
        }

    })

}

function getMessages() {

    return new Promise((resolve, reject) => {
        return resolve(list);
    });
    
}


module.exports = {
    addMessage,
    getMessages
}