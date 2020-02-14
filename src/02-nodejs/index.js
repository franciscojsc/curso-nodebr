/*
 0 Obter um usuário
 1 Obter o número de telefone de um usuário a partir de seu Id
 2 Obter o endereço do usuário pelo Id
*/

/*
  A função setTimeout está simulando o
  tempo gasto para acessar as informações
  em uma base daddos
*/
function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: "11990022",
      ddd: 11
    });
  }, 1000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  }, 1000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.errorr("DEU RUIM em USUÁRIO", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.errorr("DEU RUIM em TELEFONE", error1);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.errorr("DEU RUIM em ENDEREÇO", error2);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    });
  });
});
