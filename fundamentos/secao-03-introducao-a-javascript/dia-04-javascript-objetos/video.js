let musico = {
    nome: 'Milton',
    ultimoNome: 'Nascimento',
    apelido: 'Bituca',
    idade: 77,
    melhoresAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    localNascimento: {
        cidade: 'Rio de Janeiro',
        estado: 'Rio de janeiro'
    }
};

console.log(`O cantor ${musico.nome} ${musico.ultimoNome} possui ${musico.idade} anos`);

console.log(`O cantor ${musico['nome']} ${musico['ultimoNome']} possui ${musico['idade']} anos`);

musico['nomeCompleto'] = musico.nome + ' ' + musico.ultimoNome;

console.log(musico)

console.log(musico.localNascimento.cidade);
console.log(musico['localNascimento']['estado']);

console.log(`O cantor ${musico.nomeCompleto} nasceu no estado do ${musico.localNascimento.estado}`);