class Forma {
  private _nome: string;
  protected _dimensoes: number[];
  protected _lados: number;

  constructor(dimensoes: number[]) {
    this._dimensoes = dimensoes;
    this._lados = dimensoes.length;
    this._nome = this.definirNomePeloLado(this._lados); // Nome gerado com base na quantidade de lados
  }

  // Método privado para definir o nome com base no número de lados
  private definirNomePeloLado(lados: number): string {
    switch (lados) {
      case 3:
        return "Triângulo";
      case 4:
        return "Quadrado/Retângulo";
      case 5:
        return "Pentágono";
      case 6:
        return "Hexágono";
      default:
        return `Polígono de ${lados} lados`;
    }
  }

  // Método privado para determinar o tipo de triângulo
  private determinarTipoTriangulo(): string {
    if (this._lados === 3) {
      const [lado1, lado2, lado3] = this._dimensoes;
      if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
      } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return "Isósceles";
      } else {
        return "Escaleno";
      }
    }
    return "Não é um triângulo"; // Caso não seja um triângulo
  }

  // Método público para retornar o tipo da forma
  public getTipo(): string {
    return this._lados === 3 ? this.determinarTipoTriangulo() : "Forma com " + this._lados + " lados";
  }

  // Getters
  public get nome(): string {
    return this._nome;
  }

  public get dimensoes(): number[] {
    return this._dimensoes;
  }

  public get lados(): number {
    return this._lados;
  }
}

export { Forma };
