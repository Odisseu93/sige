import { Conteudo } from "./conteudo.js";

export class Estudando extends Conteudo{
  constructor(nome, descricao, status) {
    super(nome, descricao);
    this._status = "Estudando"
  }

}