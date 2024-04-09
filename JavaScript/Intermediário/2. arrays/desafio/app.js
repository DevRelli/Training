/*
    Sistema de Relatório Escolar: Aprovado ou Reprovado
*/

let notas = [8, 9, 8.5, 7, 5, 5.8, 6, 8];

function geraRelatorio(array){
    let alunosAprov = 0;
    let alunosReprov = 0;

    array.forEach(nota => {
        if(nota >= 7){
            alunosAprov += 1;
        }else{
            alunosReprov += 1;
        }
    });

    return `Aprovados: ${alunosAprov}. Reprovados: ${alunosReprov}.`;
    // console.log(alunosAprov);
    // console.log(alunosReprov);
}

console.log(geraRelatorio(notas));
// ou
// geraRelatorio([8,9,10,5,8,6,4,3]) tira o array de cima