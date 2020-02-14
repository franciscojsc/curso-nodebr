const service = require("./service");

async function main() {
  try {
    const { results } = await service.obterPessoa("a");

    let names = [];
    console.time("for");
    for (let i = 0; i < results.length; i++) {
      const pessoa = results[i];
      names.push(pessoa.name);
    }
    console.timeEnd("for");

    names = [];
    console.time("for in");
    for (let i in results) {
      const pessoa = results[i];
      names.push(pessoa.name);
    }
    console.timeEnd("for in");

    names = [];
    console.time("for of");
    for (pessoa of results) {
      names.push(pessoa.name);
    }
    console.timeEnd("for of");
  } catch (error) {
    console.error("Error", error);
  }
}
main();
