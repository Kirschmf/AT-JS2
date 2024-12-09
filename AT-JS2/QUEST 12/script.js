let frase = "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";

let fraseSemVogais = frase.split('')
    .filter(letra => !/[aeiouáéíóúãõâêîôû]/i.test(letra))
    .join('');

console.log(fraseSemVogais);