import  { Conteudo } from "./conteudo.js";
export class Estudar extends Conteudo{
  constructor(nome, descricao, status) {
    super(nome, descricao);
    this._status = "Estudar"
  }



} 
