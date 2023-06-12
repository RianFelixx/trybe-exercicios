
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const teste = { ...user, ...jobInfos};
console.log(teste);

const { name, age, nationality, profession, squad, squadInitials} = teste;

const text = `Hi, my name is ${name}, I'm ${age} old a and ${nationality}. I work as a ${profession} and my squad is ${squad}`

console.log(text);