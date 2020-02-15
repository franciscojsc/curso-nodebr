const { obterPessoa } = require("./service");

/*
  const item = {
    nome: 'Francisco',
    idade: 27
  }

  const { nome, idade } = item
  console.log(nome, idade)
*/

async function main() {
  try {
    const { results } = await obterPessoa("a");

    const familiaLars = results.filter(function(item) {
      // por padrão precisa retorna um boolean
      // para informar se deve manter ou remover da lista
      // false -> remove da lista
      // true ->  mantêm
      // não encontrou = -1
      // encontrou = posição do array
      const result = item.name.toLowerCase().indexOf("lars") !== -1;
      return result;
    });
    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
