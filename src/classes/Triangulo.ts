import { Forma } from "./Forma";
class Triangulo extends Forma {
  // Crie uma classe que extende
  constructor(dimensoes: [number, number, number]) {
    super("Triangulo", dimensoes, dimensoes.length);
  }
  // de forma e tenha somente as dimensões modificadas
  public set dimensoes(dimensoes: [number, number, number]) {
    this._dimensoes = dimensoes;
  }




}

export { Triangulo }


