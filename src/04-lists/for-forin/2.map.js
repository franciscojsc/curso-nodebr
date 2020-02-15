const service = require("./service");

// Exemplo de como o map funciona
Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const { results } = await service.obterPessoa("a");
    // forEach - percorre o array
    let names = [];
    results.forEach(function(item) {
      names.push(item.name);
    });
    console.log("names", names);

    // map - retorna um array com os items
    names = results.map(function(pessoa) {
      return pessoa.name;
    });
    console.log("names", names);

    names = results.map(pessoa => pessoa.name);
    console.log("names", names);

    names = results.meuMap(pessoa => pessoa.name);
    console.log("names", names);
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
