var routins = [];

function createRoutin(toDo) {
    routins.push(toDo)
    return routins;
}

function readRoutin(toDo) {
    return toDo;
}

function updateRoutin(toDo, newToDo) {
    var indexToUpdate = routins.indexOf(toDo)
    routins.splice(indexToUpdate, 1, newToDo)
    return newToDo;
}

function deleteRoutin(toDo) {
    var indexToDelete = routins.indexOf(toDo)
    routins.splice(indexToDelete, 1)
    return routins;
}