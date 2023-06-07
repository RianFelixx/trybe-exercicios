const titulo = document.querySelector('#page-title')
titulo.innerText = 'O Curioso Caso de Benjamin Button'

const primeiroP = document.getElementsByTagName('p')[0];
primeiroP.innerText = 'Não gosto de escrever resumos mas é o melhor filme do mundo.'

const subTitulo = document.querySelector('#subtitle');
subTitulo.innerText = 'Principais informações.'

const paragrafos = document.getElementsByClassName('paragraph-style');

const subTitle = document.getElementsByTagName('h2')[0];
subTitle.style.color = 'red';

const alteraParagrafo = () => {
  paragrafos[0].style.fontStyle = 'italic';
  paragrafos[1].innerText = 'Direção: David Fincher, Roteiristas: Eric RothRobin SwicordF. Scott Fitzgerald'
}

alteraParagrafo();

/* 
Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
Recupere o subtítulo e altere-o para: Principais informações.
Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha. */