let balance = 0;

function adicionarValor(valor) {
  balance += valor;
  return balance
}

function retirnarValor(valor) {
  balance -= valor;
  return balance
}

function multiplicarValor(valor) {
  balance *= valor;
  return balance
}

function dividirValor(valor) {
  balance /= valor;
  return balance
}

console.log(adicionarValor(100));

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(nome) {
  if (typeof nome !== 'string') {
    return 'O parâmetro passado deve ser do tipo string';
  }
  trybeBankCustomers.push(nome);
  return trybeBankCustomers;
}

console.log(addCustomers('Rian'));