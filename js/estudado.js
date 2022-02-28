import  { Conteudo } from "./conteudo.js";
export class Estudado extends Conteudo {
  constructor(nome, descricao, status) {
    super(nome, descricao);
    this._status = "Estudado"
  }



}