const service = require("./service");

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
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
