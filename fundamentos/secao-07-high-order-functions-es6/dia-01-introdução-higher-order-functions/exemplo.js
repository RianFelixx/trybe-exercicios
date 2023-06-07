const employees = [
  { id: 1, nome: 'Douglas Adams', idade: 20},
  { id: 2, nome: 'H. G. Wells', idade: 18},
  { id: 3, nome: 'Júlio Verne', idade: 57},
  { id: 4, nome: 'Margaret Atwood', idade: 83},
  { id: 5, nome: 'Edgar Allan Poe', idade: 19},
];

let teste = employees.find((employee) => employee.id === 2).nome; // H. G. Wells
console.log(teste);

let teste2 = employees.find((employee) => employee.nome === 'Margaret Atwood').id; // 4
console.log(teste2);

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

let teste3 = idades.find((idade) => idade === 33); // undefined
console.log(teste3);
