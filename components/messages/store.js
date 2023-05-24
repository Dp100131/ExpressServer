const list = []

function addMeesageStore(message) {

    list.push(message);
    
}

function getMessageStore() {

    return list;
    
}


module.exports = {
    add: addMeesageStore,
    list: getMessageStore,
    //get,
    //update,
    //delete
}