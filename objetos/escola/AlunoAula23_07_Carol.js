/*
class AlunoAula23_07 {
  matricula; //visibilidade é pública
}

matheus = new AlunoAula23_07();
matheus.matricula = 23202454;
console.log(matheus.matricula);
*/

class AlunoAula23_07 {
    #matricula; //visibilidade é privada
    setMatricula(matricula) {
      //cria um método público para a atribuição do valor privado
      this.#matricula = matricula;
    }
    getMatricula() {
      //metodo para ler o valor, neste caso a matrícula
      return this.#matricula;
    }
  }
  
  module.exports = AlunoAula23_07;
  /*
    '+' = público
    '-' = privado
    '#' = protegido
  */
  