const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const encontrarPrimeiroNome = (array) => array.find((pessoa) => pessoa.author.birthYear === 1947);
/* console.log(encontrarPrimeiroNome(books));
 */
const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = '';
  books.forEach((element) => {
    if (element.name.length > nameBook.length) {
      nameBook = element.name;
    }
  })
  return nameBook;
}
/* console.log(smallerName()); */

const getNamedBook = () => {
  return books.find((element) => element.name.length === 26);
}

console.log(getNamedBook());

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear >= 1900 && element.author.birthYear <= 1999);
}
console.log(everyoneWasBornOnSecXX());

const someBookWasReleaseOnThe80s = () => {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());