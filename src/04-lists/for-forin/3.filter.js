const { obterPessoa } = require("./service");

/*
  const item = {
    nome: 'Francisco',
    idade: 27
  }

  const { nome, idade } = item
  console.log(nome, idade)
*/

Array.prototype.meuFilter = function(callback) {
  const lista = [];
  for (const index in this) {
    const item = this[index];
    const resultado = callback(item, index, this);
    if (!resultado) continue;
    lista.push(item);
  }
  return lista;
};

async function main() {
  try {
    const { results } = await obterPessoa("a");

    // const familiaLars = results.filter(function(item) {
    //   // por padrão precisa retorna um boolean
    //   // para informar se deve manter ou remover da lista
    //   // false -> remove da lista
    //   // true ->  mantêm
    //   // não encontrou = -1
    //   // encontrou = posição do array
    //   const result = item.name.toLowerCase().indexOf("lars") !== -1;
    //   return result;
    // });

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error("ERROR", error);
  }
}

main();
