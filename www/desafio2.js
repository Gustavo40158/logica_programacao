let notas = [7, 5, 6, 4, 8];

let notasTrocada = []

for(let i = 0; i < notas.length; ++i) {
    if (notas[i] < 6){
        notasTrocada.push(6)
    } else {
        notasTrocada.push(notas[i])
    }
}

console.log(notasTrocada)