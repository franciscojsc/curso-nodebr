/*
 0 Obter um usuário
 1 Obter o número de telefone de um usuário a partir de seu Id
 2 Obter o endereço do usuário pelo Id
*/

const util = require("util");

/*
  A função setTimeout está simulando o
  tempo gasto para acessar as informações
  em uma base daddos
*/
function obterUsuario() {
  // quando der algum problema -> reject(ERRO)
  // quando sucesso -> resolve()
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      //return reject(new Error("DEU RUIM DE VERDADE!"))

      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        telefone: "11990022",
        ddd: 11
      });
    }, 1000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  }, 1000);
}

const obterEnderecoAsync = util.promisify(obterEndereco);

async function main() {
  try {
    console.time("medida-promise");
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);
    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `);
    console.timeEnd("medida-promise");

    return usuario;
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
main();
