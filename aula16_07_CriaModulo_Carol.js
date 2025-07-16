function soma(a, b) {
  let somar = a + b;
  return somar;
}

function subtrair(a, b) {
  let sub = a - b;
  return sub; //podendo ser utilizado de forma "return (a - b);"
}

//evitar criar variáveis desnecessárias

//node ./bib/criamodulo.js

module.exports = { soma, subtrair }; //module é para utilizar algo que vc queira exportar. {nome da(s) função(ões)}, disponibiliza essas duas funções para serem utilizadas
