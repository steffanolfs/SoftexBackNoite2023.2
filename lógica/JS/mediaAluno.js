calcularAprovacao()

function calcula(nota1, nota2, nota3, nota4) {

    do
        nota1 = Number(prompt('Informe primeira nota do aluno: '))
    while (nota1 < 0 || nota1 > 10)

    do
        nota2 = Number(prompt('Informe segunda nota do aluno: '))
    while (nota2 < 0 || nota2 > 10)

    do
        nota3 = Number(prompt('Informe terceira nota do aluno: '))
    while (nota3 < 0 || nota3 > 10)

    do
        nota4 = Number(prompt('Informe quarta nota do aluno: '))
    while (nota1 < 0 || nota1 > 10)



    var = (nota1 + nota2 + nota3 + nota4) / 4
    return
}

function calcularAprovacao) {
    var = calcula()

    var pctFaltas = Number(prompt('Informe percentual de faltas do aluno: '))

    if >=7 && pctFaltas <= 20)
document.write('O aluno está aprovado.')
else if >=3 && < 7 && pctFaltas <= 20)
document.write('O aluno está em recuperação.')
else if <3 || pctFaltas > 20)
document.write('O aluno está reprovado.')

}