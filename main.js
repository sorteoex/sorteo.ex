const nombres = ['🏆@santi', '🥈@Pedro', '🥉@Tomas', '@marcos', '@lucas'];
let contador = 0;
let contadorTocadas = 0;

function cambiarNombre() {
  const nombreMostrado = document.getElementById('nombreMostrado');
  const miBoton = document.getElementById('miBoton');

  if (contador < nombres.length) {
    // Deshabilitar el botón mientras se está ejecutando el temporizador
    miBoton.disabled = true;

    // Llamar a la función mostrarNombre después de 6 segundos
    setTimeout(() => {
      nombreMostrado.textContent = nombres[contador];
      contador++;

      // Habilitar el botón después de que se haya completado el temporizador
      miBoton.disabled = false;

      // Agregar el ganador a la lista
      updateWinnersList(nombreMostrado.textContent);

    }, 6000); // 6000 milisegundos = 6 segundos
  } else {
    miBoton.disabled = true; // Desactiva el botón después de mostrar el último nombre
  }
}

function iniciarTemporizador() {
  var tiempoRestante = 5; // en segundos
  var btn = document.getElementById('miBoton');

  // Deshabilitar el botón durante el temporizador
  btn.disabled = true;

  // Incrementar el contador de toques al botón
  contadorTocadas++;

  // Verificar si se han tocado el botón 5 veces
  if (contadorTocadas >= 6) {
    btn.disabled = true;
    return;
  }

  // Actualizar visualmente la cuenta regresiva cada segundo
  var temporizadorVisual = setInterval(function () {
    btn.textContent = ' ' + tiempoRestante + '';

    if (tiempoRestante <= 0) {
      // Habilitar el botón al finalizar el temporizador
      btn.textContent = 'Sortear';
      btn.disabled = false;

      clearInterval(temporizadorVisual); // Detener el temporizador visual
    } else {
      tiempoRestante--;
    }
  }, 1000);
}

const updateWinnersList = (winner) => {
  const listItem = document.createElement('li');
  listItem.textContent = winner;
  document.getElementById('winnersList').appendChild(listItem);
};
