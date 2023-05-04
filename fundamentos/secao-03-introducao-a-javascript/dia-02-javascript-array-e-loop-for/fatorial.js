//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let numero = 10;

for(let index = numero; index > 0; index -= 1){
    numero *= index;
}

console.log(numero);

