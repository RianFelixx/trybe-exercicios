let array = [
  'rian',
  'felix',
  'oliveria'
];

const envia = (nome, index, tamanho) => {
  console.log(`Email para ${nome} foi enviado com sucesso e sua posicao é ${index} e seu tamanho é ${tamanho.length}`);
};

array.forEach(envia);