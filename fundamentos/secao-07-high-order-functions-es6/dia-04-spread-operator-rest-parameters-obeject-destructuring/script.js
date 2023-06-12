// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// cria um novo array com os itens do array original espalhados
const newItems = [...items];

newItems.push('teste');
console.log(newItems);
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

const product1 = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct1 = { ...product1, ...productPrice };

console.log(newProduct1); // {id: 1, name: 'Camiseta', price: 23}

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800