const Pessoa_Carol_28_07 = require('./Pessoa_Carol_28_07.js');

class PF_Carol extends Pessoa_Carol_28_07 {
  //por causa da herança, então a classe PF já possui nome e email
  #cpf;
  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  getCPF() {
    return this.#cpf;
  }
}
module.export = PF_Carol; //exportando a classe