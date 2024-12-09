let numeros = [1, [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]]];

const somarNumeros = (arr) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc + somarNumeros(item);
    }
    return acc + item;
  }, 0);
};

console.log(somarNumeros(numeros));
