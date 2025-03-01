const { obterPessoa } = require("./service");

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial != undefined ? valorInicial : this[0];
  for (let index = 0; index <= this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoa("a");
    const pesos = results.map(item => parseInt(item.height));
    console.log("Pesos:", pesos);

    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo;
    });
    console.log("Total:", total);

    const minhaLista = [
      ["Francisco", "Chaves"],
      ["NodeBr", "Nerdzão"]
    ];

    const lista = minhaLista
      .meuReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, [])
      .join(", ");
    console.log("Lista:", lista);
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
