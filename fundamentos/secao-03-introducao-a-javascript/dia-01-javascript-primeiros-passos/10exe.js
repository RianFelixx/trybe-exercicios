let custoProduto = 5 * 1000;
let impostoSobreOCusto = custoProduto * 0.20;
let valorCustoTotal = custoProduto + impostoSobreOCusto; 

let precoVenda = 10 * 1000;
let lucro = 0;

if(custoProduto > 0 && precoVenda > 0){
    lucro = precoVenda - valorCustoTotal;
    console.log(lucro);
}else{
    console.log('Error');
}

