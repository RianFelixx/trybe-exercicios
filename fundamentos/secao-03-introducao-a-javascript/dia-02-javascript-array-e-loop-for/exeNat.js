// 3. Encontre o menor elemento de um array
const numbers  = [10, 3, 4, 6, 7, 8, 0, 23];
let smaller = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if(smaller > numbers[index]){
        smaller += numbers[index];
    }  
}
console.log(smaller);