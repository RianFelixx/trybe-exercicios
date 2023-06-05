const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

/* const acessarSchool = () => {
  for (let index = 0; index < school.lessons.length; index += 1) {
    console.log(school.lessons[index]);
  }
}
acessarSchool(); */

/* const somarEstudantes = () => {
  let sum = 0;

  for (let index = 0; index < school.lessons.length; index += 1) {
    sum += school.lessons[index].students;
  }
  
  return sum;
}

console.log(somarEstudantes()); */

/* const verificarChave = (obj, chave) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][chave] === undefined) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificarChave(school, 'courseee')); */

const mudaTurno = (obj, curso, turno) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index].course === curso) {
      return obj.lessons[index].shift = turno;
    }
  }
  return 'Curso não encontrado';
}

console.log(mudaTurno(school, 'Python', 'Noite'));
console.log(school);

/* Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave. */