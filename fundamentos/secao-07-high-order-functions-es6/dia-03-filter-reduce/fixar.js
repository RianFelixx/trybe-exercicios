const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = numbers.filter((numero) => numero % 2 === 0);
const somaPares = numerosPares.reduce((acc, curr) => acc += curr);
console.log(somaPares);