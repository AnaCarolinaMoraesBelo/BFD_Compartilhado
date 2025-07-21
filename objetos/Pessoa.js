/* 

Classe - Estrutura que eu quero respresentar
As estruturas tem características e funcionalidades
  -> Dentro das classes há os atributos (características/propriedades)
  -> Métodos (ações ou funcionalidades)
Objeto é uma instância daquela classe

*/

class Pessoa {
    //class = classe; é comum utilizar o nome do arquivo após a classe. Sempre criar o nome do arquivo com letra maiúscula
    constructor(peso, altura) {
      //o construtor serve para quando for instânciar, ela chame essa função
      this.peso = peso;
      this.altura = altura;
    }
    imc() {
      let imc = this.peso / (this.altura * this.altura); //this é desta função
      return imc;
    }
  }
  