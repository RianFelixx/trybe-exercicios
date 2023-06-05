const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(customer, 'email', 'dasda');
addProperty(customer, 'fone', '19/07/1932');
addProperty(customer, 'userGithub', '19/07/1932');
addProperty(customer, 'linkedIn', '19/07/1932');

console.log(customer);