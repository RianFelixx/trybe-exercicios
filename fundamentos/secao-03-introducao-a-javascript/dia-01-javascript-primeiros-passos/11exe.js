let salarioBruto = 3500.00;
let salarioLiquido = 0;
let aliquotaInss = 0;
let descontoInss = 0;
let aliquotaIR = 0;
let valorDescontoIR = 0;

//INSS
if(salarioBruto <= 1555.94){
    aliquotaInss = 0.08;
    descontoInss = salarioBruto * aliquotaInss;//colocar ao final para calculo    
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = 0.09;
    descontoInss = salarioBruto * aliquotaInss;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaInss = 0.11;
    descontoInss = salarioBruto * aliquotaInss;
}else if(salarioBruto > 5189.82){
    aliquotaInss = 570.88;
    descontoInss = salarioBruto - aliquotaInss;
}else{
    console.log('Salário inválido.');
}

let salarioBase = salarioBruto - descontoInss;

//IR - IMPOSTO DE RENDA
if (salarioBase <= 1903.98) {
    //Isento
    salarioLiquido = salarioBase;
    console.log('O seu salário liquido é: ' + salarioLiquido.toFixed(2));
}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = 7.5;
    valorDescontoIR = ((salarioBase * aliquotaIR) / 100) - 142.80; 
    salarioLiquido = salarioBase - valorDescontoIR;
    console.log('O seu salário liquido é: ' + salarioLiquido.toFixed(2));
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = 0.15;
    valorDescontoIR = ((salarioBase * aliquotaIR) / 100) - 354.80;
    salarioLiquido = salarioBase - valorDescontoIR;
    console.log('O seu salário liquido é: ' + salarioLiquido.toFixed(2));
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIR = 22.5;
    valorDescontoIR = ((salarioBase * aliquotaIR) / 100) - 636.13;
    salarioLiquido = salarioBase - valorDescontoIR;
    console.log('O seu salário liquido é: ' + salarioLiquido.toFixed(2));
}else if(salarioBase > 4664.68){
    aliquotaIR = 27.5;
    valorDescontoIR = ((salarioBase * aliquotaIR) / 100) - 869.36;
    salarioLiquido = salarioBase - valorDescontoIR;
    console.log('O seu salário liquido é: ' + salarioLiquido.toFixed(2));
}else{
    console.log('Salário inválido.');
}

