const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

let frase = `O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'`

reader.favoriteBooks[1] = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
};

let quantidadeLivros = `${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`

console.log(frase);
console.log(reader);
console.log(quantidadeLivros);

/* 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato: “Julia tem {quantidade} livros favoritos.”*/