const { obterPessoa } = require("./service");

async function main() {
  try {
    const { results } = await obterPessoa("a");
    const pesos = results.map(item => parseInt(item.height));
    console.log("Pesos:", pesos);

    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo;
    });
    console.log("Total:", total);
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
