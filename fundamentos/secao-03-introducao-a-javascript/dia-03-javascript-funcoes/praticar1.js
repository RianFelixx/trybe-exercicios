let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function adicionaCliente(cliente) {
    if (typeof(cliente) == 'string') {
        clientesTrybeBank.push(cliente);
        return clientesTrybeBank;
    }else {
        return 'Error';
    }
}

console.log(adicionaCliente('Rian'));


function deletaCliente(cliente) {
    const index = clientesTrybeBank.indexOf(cliente);
    if(clientesTrybeBank.includes(cliente) && typeof(cliente) == 'string'){
        clientesTrybeBank.splice(index, 1);
        return clientesTrybeBank;
    }else {
        return 'Error';
    }
}

console.log(deletaCliente('Ada'));