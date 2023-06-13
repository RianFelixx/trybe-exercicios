const primeNumbers = [17, 23, 37]
const [numberOne, numberTwo, numberThree] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
}

sum(numberOne, numberThree) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring