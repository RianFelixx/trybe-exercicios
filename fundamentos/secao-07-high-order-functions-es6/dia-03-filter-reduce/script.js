const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const teste = dados.filter((element) => typeof element === 'string');
console.log(teste);

const listaNumeros = [10, 20, 30, 40];

const teste1 = listaNumeros.filter((element) => element > 20);
console.log(teste1);

const teste2 = listaNumeros.reduce((acc, curr) => acc += curr);
console.log(teste2);

const numbers = [50, 85, -30, 3, 15];

const teste3 = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(teste3);