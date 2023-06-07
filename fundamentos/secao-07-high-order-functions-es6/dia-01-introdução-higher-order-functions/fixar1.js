const numbers = [19, 21, 30, 3, 45, 22, 15];

const retorno = numbers.find((element) => element % 3 === 0 || element % 5 === 0)
console.log(retorno);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nomeCinco = names.find((element) => element.length === 5);
console.log(nomeCinco);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const idMusica = musicas.find((element) =>  element.id === '31031685').title;
console.log(idMusica);