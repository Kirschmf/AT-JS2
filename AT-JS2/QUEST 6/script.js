let numeros = [ 3, 1, 2, 5 ];
let contagem = [];

for (let numero of numeros) {
    let subVetor = [];
    
    for (let i = 1; i <= numero; i++) {
        subVetor.push(i);
    }
    
    contagem.push(subVetor);
}

console.log(contagem);
