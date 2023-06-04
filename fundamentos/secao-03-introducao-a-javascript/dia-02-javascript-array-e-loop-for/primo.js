let maiorPrimo = 0;

for(let index = 1; index <= 50; index += 1){
    if (index > 1 && index % index === 0 && index % 1 === 0) {
        maiorPrimo = index;
    }
}

console.log(maiorPrimo);