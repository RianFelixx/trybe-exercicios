let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0;
let contaImpar = 0;
let menorValor = 2;
let array = [];

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    soma += numbers[index];
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
    if (numbers[index] % 2 !== 0) {
        contaImpar += 1;
    }else {
        console.log('Nenhum valor ímpar encontrado');
    }
    if (numbers[index] < menorValor) {
        menorValor + numbers[index];
    }
}

for(let index = 0; index <= 25; index += 1){
    array.push(index);
}



let media = soma / numbers.length;

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
}else if (media <= 20) {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

console.log(soma);
/* console.log(media); */
console.log(maiorValor);
console.log(contaImpar);
console.log(menorValor);

console.log(array);

for(let index = 0; index < array.length; index += 1){
    console.log(array[index] / 2);
}