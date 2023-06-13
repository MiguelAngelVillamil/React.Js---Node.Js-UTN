const generarNumeroAleatorio = () => {
  var a = Math.floor(Math.random() * 100) + 1
  console.log(a);
  return a;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado === numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
  } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
  } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
  }
};
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
