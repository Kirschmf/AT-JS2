let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";

let valor = frase.match(/R\$\s([\d.,]+)/);

if (valor) {
  let valorBitCoin = parseFloat(valor[1].replace('.', '').replace(',', '.'));
  
  let resultado = (valorBitCoin / 3).toFixed(10);

  let resultadoFinal = resultado.substring(0, resultado.indexOf('.') + 3);
  
  console.log(resultadoFinal);
}
