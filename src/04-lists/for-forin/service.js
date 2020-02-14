const axios = require("axios");
const URL = `https://swapi.co/api/people`;

async function obterPessoa(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

obterPessoa("r2")
  .then(function(resultado) {
    console.log("resultado", resultado);
  })
  .catch(function(error) {
    console.error("DEU RUIM", error);
  });

module.exports = {
  obterPessoa
};
