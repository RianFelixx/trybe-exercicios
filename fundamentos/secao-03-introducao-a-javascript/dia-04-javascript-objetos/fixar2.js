const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const nomeEntregadora = fullOrder.order.delivery.deliveryPerson;
  const nomeCLiente = fullOrder.name;
  const telefone = fullOrder.phoneNumber;
  const endereco = fullOrder.address.street;
  const numero = fullOrder.address.number;
  const ap = fullOrder.address.apartment;

  return `Olá, ${nomeEntregadora}, entrega para: ${nomeCLiente}, Telefone: ${telefone}, ${endereco}, Número: ${numero}, AP: ${ap}`;
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment = 50.00
  const nomeCliente = fullOrder.name;
  const produto1 = 'marguerita';
  const produto2 = 'pepperoni';
  const produto3 = fullOrder.order.drinks.coke.type;
  const totalCompra = fullOrder.payment;

  return `OLá, ${nomeCliente}, o valor total de seu pedido de ${produto1}, ${produto2} e ${produto3} é de R$ ${totalCompra}`;
}

console.log(orderModifier(order));



