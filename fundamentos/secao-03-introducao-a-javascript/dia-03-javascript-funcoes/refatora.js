let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaCliente(cliente) {
    if(clientesTrybeBank.includes(cliente)){
        return true;
    }
}

function verificaString(cliente) {
    if (typeof(cliente) == 'string') {
        return true;
    }
}


function deletaCliente(cliente) {
    const index = clientesTrybeBank.indexOf(cliente);
    if(verificaCliente(cliente) && verificaString(cliente)){
        clientesTrybeBank.splice(index, 1);
        return clientesTrybeBank;
    }else {
        return 'Error';
    }
}

console.log(deletaCliente('Ada'));