// Definindo a classe Aluno
class Aluno {
  constructor(nome, numero, idade) {
    this.nome = nome;
    this.numero = numero;
    this.idade = idade;
  }

  // Método para exibir o nome do Aluno
  exibirNome() {
    console.log(`Nome do aluno: ${this.nome}`);
    console.log(`Número do aluno: ${this.numero}`);
    console.log(`Idade do aluno: ${this.idade}`);
  }
}

// Criando um objeto Aluno
const aluno1 = new Aluno('Victor Hugo', 123, 18);

// Chamando o método para exibir o nome do Aluno
aluno1.exibirNome();
