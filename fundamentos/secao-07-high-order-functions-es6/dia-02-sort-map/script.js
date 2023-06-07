const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();
console.log(food);

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]