let numbers = [50, 90, 30, 190, 70, 8, 100, 2, 350, 270, 40, 50];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    console.log(numbers[index]);
}

console.log(soma);

let media = soma / (numbers.length);
console.log(media);

if (media > 20){
    console.log('O valor da média aritmética é maior que 20');
}else if (media <= 20){
    console.log('O valor da média aritmética é menor ou igual a 20');
}

let higher = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if(higher < numbers[index]){
        higher = numbers[index];
    }  
}
console.log(higher);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let impar = [];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        impar.push(numbers[index]);
    }
}

if (impar.length == 0) {
    console.log('Nenhum valor ímpar encontrado');
}

console.log(impar.length);

let smaller = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if(smaller > numbers[index]){
        smaller = numbers[index];
    }  
}
console.log(smaller);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array = [];

for(let index = 1; index <= 25; index += 1){
    array.push(index);
}

console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < array.length; index += 1){
    console.log(array[index] / 2);
}

