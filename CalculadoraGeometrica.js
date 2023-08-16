// Classe para cálculos de geometria
// Classe para cálculos de geometria
class Geometria {
  static calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }

  static calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }

  static calcularAreaEsfera(raio) {
    return 4 * Math.PI * Math.pow(raio, 2);
  }

  static calcularVolumeEsfera(raio) {
    return (4 / 3) * Math.PI * Math.pow(raio, 3);
  }

  static calcularAreaCilindro(raio, altura) {
    const baseArea = Math.PI * Math.pow(raio, 2);
    const lateralArea = 2 * Math.PI * raio * altura;
    return 2 * baseArea + lateralArea;
  }

  static calcularVolumeCilindro(raio, altura) {
    return Math.PI * Math.pow(raio, 2) * altura;
  }
}

// Classe Triangulo
class Triangulo {
  constructor(base, altura, lado1, lado2, lado3) {
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  calcularArea() {
    return Geometria.calcularAreaTriangulo(this.base, this.altura);
  }

  calcularPerimetro() {
    return Geometria.calcularPerimetroTriangulo(this.lado1, this.lado2, this.lado3);
  }
}

// Classe Esfera
class Esfera {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Geometria.calcularAreaEsfera(this.raio);
  }

  calcularVolume() {
    return Geometria.calcularVolumeEsfera(this.raio);
  }
}

// Classe Cilindro
class Cilindro {
  constructor(raio, altura) {
    this.raio = raio;
    this.altura = altura;
  }

  calcularArea() {
    return Geometria.calcularAreaCilindro(this.raio, this.altura);
  }

  calcularVolume() {
    return Geometria.calcularVolumeCilindro(this.raio, this.altura);
  }
}

// Classe principal para gerenciar as classes de figuras geométricas
class GerenciadorGeometria {
  static calcularFigura(figura) {
    console.log(`Área da figura: ${figura.calcularArea()}`);
    if (figura instanceof Cilindro || figura instanceof Esfera) {
      console.log(`Volume da figura: ${figura.calcularVolume()}`);
    }
  }
}

// Exemplo de uso
const triangulo = new Triangulo(5, 7, 3, 4, 5);
const esfera = new Esfera(3);
const cilindro = new Cilindro(2, 10);

GerenciadorGeometria.calcularFigura(triangulo);
GerenciadorGeometria.calcularFigura(esfera);
GerenciadorGeometria.calcularFigura(cilindro);
