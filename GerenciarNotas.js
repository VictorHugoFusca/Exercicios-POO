class AtividadeAvaliativa {
    constructor(nome, nota, peso) {
        this.nome = nome;
        this.nota = nota;
        this.peso = peso;
    }
}

function calcularMedia(atividades) {
    let somaNotas = 0;
    let somaPesos = 0;

    for (const atividade of atividades) {
        somaNotas += atividade.nota * atividade.peso;
        somaPesos += atividade.peso;
    }

    const mediaFinal = somaNotas / somaPesos;
    return mediaFinal;
}

const atividade1 = new AtividadeAvaliativa('Prova 1', 8, 0.4);
const atividade2 = new AtividadeAvaliativa('Trabalho 1', 9, 0.2);
const atividade3 = new AtividadeAvaliativa('Prova 2', 7, 0.4);

const atividadesDoAluno = [atividade1, atividade2, atividade3];

const mediaFinalDoAluno = calcularMedia(atividadesDoAluno);

console.log('Atividades Avaliativas do Aluno: ')
for (const atividade of atividadesDoAluno) {
    console.log(`- ${atividade.nome}: Nota ${atividade.nota}, Peso ${atividade.peso}`);
}
console.log(`Média Final do Aluno: ${mediaFinalDoAluno.toFixed(2)}`);