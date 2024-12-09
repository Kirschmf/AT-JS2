const tuplas = [ [3, 5], [7, 1], [6, 8], [4, 9], [2, 3], [8, 1], [5, 7], [9, 6], [1, 4], [2, 8] ];

const resultado = tuplas
  .filter(tupla => (tupla[0] % 2 !== tupla[1] % 2))
  .map(tupla => tupla[0] + tupla[1]);

console.log(resultado);
