let tuplas = [ [3, 7], [5, 2], [8, 4], [1, 9], [6, 3] ];
let somaTotal = 0;

for (let tupla of tuplas) {
    for (let numero of tupla) {
        somaTotal += numero;
    }
}

console.log(`A soma total é: ${somaTotal}`);
