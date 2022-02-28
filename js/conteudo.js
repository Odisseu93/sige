export class Conteudo {
  _nome;
  _descricao;
  _status;

  constructor(nome, descricao, status) {
    this._nome = nome;
    this._descricao = descricao;
    this._status = status;
  }

set _nome (nome) {
  this._nome = nome;
}

get _nome () {
  return this._nome;
}

set _descricao(descricao) {
  this._descricao = descricao;
}

get _descricao() {
  return this._descricao;
}


set _descricao(status) {
  this._status = status;
}

get _status() {
  return this._status;
}

//este método sertá para alterar os status
addStatus(status) {
  this._status = status;
}

}