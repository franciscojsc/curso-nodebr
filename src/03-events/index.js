const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

// on é uma alias para addListener
meuEmissor.on(nomeEvento, function(click) {
  console.log("um usuário clicou", click);
});

meuEmissor.emit(nomeEvento, "na barra de rolagem");
meuEmissor.emit(nomeEvento, "no OK");

let count = 0;
setInterval(function() {
  meuEmissor.emit(nomeEvento, "no ok " + count++);
}, 5000);

const stdin = process.openStdin();
stdin.addListener("data", function(value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
