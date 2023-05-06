/* let clientesTrybeBank = ['Rian', 'Luyanna', 'Karian'];

function cumprimentaCliente(cliente){
    return 'Olá,' + cliente + '. Essa é sua conta TrybeBank.';
}

console.log(cumprimentaCliente(clientesTrybeBank));
 

let status = 'deslogado';

function  logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado'
    }else {
        status = 'deslogado';
    }
}

console.log(status);

logarDeslogar();
console.log(status);

logarDeslogar();
console.log(status);

console.log('O usuário está ' + status + ' no sistema TrybeBank'); */

function sacar(valor, saldo){
    if(valor >= 1 && saldo >= 0){
        if(valor <= saldo){
            return 'Saqie realizado com sucesso. Novo saldo: R$ ' + (saldo - valor) + ',00';
        }else {
            return 'Saldo insuficiente. Seu saldo atual é: R$ ' + saldo + ',00';
        }
    }else{
        return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.'
    }
}

console.log(sacar(2, 20));
console.log(sacar(2, -5)); 
console.log(sacar(2, 0)); 