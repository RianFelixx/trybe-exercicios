
// Nesse exemplo, o "switch/case" deverá imprimir no terminal a classificação
// dos filmes que podem ser assistidos de acordo com a faixa etária das pessoas.

let faixaEtaria = 'adolescente';

switch (faixaEtaria) {
  // Caso a variável "faixaEtaria" receba o valor "adolescente", será aplicada a lógica abaixo.
  case 'adolescente':

    // Caso a pessoa seja adolescente, o console exibirá a mensagem 'Consulte a classificação do filme'.
    console.log('Consulte a classificação do filme');

    // O "break" serve para que o código não continue rodando caso seu resultado
    // já tenha sido atingido.
    break;
    
  // Após implementar a lógica de um case, você pode abrir outro case.
  // Agora, faça a lógica do que deve ocorrer se a pessoa for adulta,
  // Colocando o valor "adulto" na variável "faixaEtaria"
  case 'adulto':

    // Caso a pessoa seja adulta, o console exibirá a mensagem:
    // 'A pessoa adulta é classificada para assistir a qualquer filme'
    console.log('A pessoa adulta é classificada para assistir a qualquer filme')

    // Interrompe-se o fluxo novamente caso a pessoa seja adulta.
    break;

  // Repete-se o mesmo processo para o case "idoso".
  case 'idoso':

      console.log('A pessoa idosa é classificada para assistir a qualquer filme');
      break

  // O "default" é utilizado como um retorno padrão caso o valor passado não
  // encaixe em nenhum dos cases.

  // Ou seja, se a pessoa for criança, recém-nascida ou pertencente à qualquer
  // outra faixa etária, essa será a lógica implementada.
  default:

    // Note que não é necessário utilizar o break após o default. Como todo o código
    // já foi executado, não é necessário interromper o funcionamento do mesmo.
    console.log('Só pode assistir a filmes livres');
}