console.log('==== Objeto Pessoa =====');

const Pessoa_Carol_28_07 = require('./pessoas/Pessoa_Carol_28_07.js');

const x = new Pessoa_Carol_28_07();
var resposta = x.setNome('Matheus');
console.log(resposta);
if (resposta) {
  console.log(x.getNome()); //verificação do que foi passado como valor na variável
} else {
  console.log('Nome vazio. Preencha-o');
}
resposta = x.setEmail('kuromi@gmail.com');
console.log(resposta);
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log('E-mail vazio. Preencha-o');
}

console.log('==== Objeto PF =====');
const PF = require('./pessoas/PF');
const y = new PF();
resposta = y.setNome('Matheus');
console.log(resposta);
if (resposta) {
  console.log(y.getNome());
} else {
  console.log('Nome vazio. Preencha-o');
}
resposta = y.setEmail('');
console.log(resposta);
if (resposta) {
  console.log(y.getEmail());
} else {
  console.log('Email vazio.  Preencha-o');
}
resposta = y.setCPF('2609202609-20');
console.log(resposta);
if (resposta) {
  console.log(y.getCPF());
} else {
  console.log('CPF vazio. Preencha-o');
}