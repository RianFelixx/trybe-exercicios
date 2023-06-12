// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Pêra', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açaí', 'Calda', 'Granola'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));