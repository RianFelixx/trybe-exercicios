let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for(let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
    if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index];
    }else{
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log('----------------------');
console.log(menorPalavra);