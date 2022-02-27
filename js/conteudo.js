export class Conteudo {
  _nome;
  _descricao;
  _status;

  constructor(nome,descricao){
    this._nome = nome;
    this._descricao = descricao;
  }

set _nome (nome){
  this._nome = nome;
}

get _nome (){
  return this._nome;
}

set _descricao(descricao){
  this._descricao = descricao;
}

get _descricao(){
  return this._descricao;
}

addStatus(){

}

}