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

const usuarioPromise = obterUsuario();

usuarioPromise
  .then(function(usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id
        },
        telefone: result
      };
    });
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      };
    });
  })
  .then(function(resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome},
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `);
  })
  .catch(function(error) {
    console.error("DEU RUIM", error);
  });
