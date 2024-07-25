const alunos = [
    { nome: 'Gustavo', nota: 7 },
    { nome: 'Julia', nota: 5 },
    { nome: 'Paula', nota: 8 },
    { nome: 'Wagner', nota: 4 },
    { nome: 'Felipe', nota: 6 }
];

const filtraAlunosAprovados = aluno => aluno.nota >= 6;
const alunosAprovados = alunos.filter(filtraAlunosAprovados);

alunosAprovados.forEach(function(aprovados) {
    console.log(`${aprovados.nome} foi aprovado(a) com a nota ${aprovados.nota}.`)
});