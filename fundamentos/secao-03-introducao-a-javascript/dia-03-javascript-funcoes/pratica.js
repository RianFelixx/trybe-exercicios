let saldo = 0;

function depositaValor(deposito) {
    saldo += deposito;
    return saldo;
}

function saqueValor(saque) {
    saldo -= saque;
    return saldo;
}

function multiplicaValorPorTaxa(taxa) {
    saldo *= taxa;
    return saldo;
}

function divideValor(divide) {
    saldo /= divide;
    return saldo;
}

console.log(depositaValor(1000));
console.log(saqueValor(100));
console.log(multiplicaValorPorTaxa(10));
console.log(depositaValor(3));