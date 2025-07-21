const Pessoa_Carol_21_07 = require('./Pessoa.js'); //importei a classe

const matheus = new Pessoa('Matheus Saraiva', 80, 1.83);

console.log(matheus.imc());
console.log(matheus.peso);
const carol = new Pessoa();
carol.peso = 60;
carol.altura = 1.59;
console.log(carol.imc());
console.log(carol.peso);

//para executar o código = "node ./objetos/usaPessoa.js"