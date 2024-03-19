const contestants = ["@tinavalentina02", "@tinavalentina02", "@lore_kuchaski", "@ruizrivadeneira", "@camiramirez16", "@rocio_reinoso10", "@karencordero.22", "@karencordero.22", "@lauty_silvero101", "@rocio_reinoso10", "@ruth_azc", "@ruth_azc", "@rocio_reinoso10", "@rocio_reinoso10", "@dianafamoso", "@grachu301", "@grachu301", "@rocio_reinoso10", "@stefanidasilvaa_", "@gracielaesquivelok", "@ruth_azc", "@beel.espinolaa", "@grachu301", "@censada", "@migue.arroquia", "@lobo_bsas2022", "@fl0r.999", "@dianafamoso"];
let firstTime = true;

const winnerButton = document.querySelector('button');
const winnerName = document.querySelector('.winner');
const winnersList = document.querySelector('.winners-list');

const pickAWinner = () => {
const winningNumber = Math.floor(Math.random() * contestants.length);
 const winner = contestants[winningNumber];
return winner;   }

const numberOfEntries = contestants.length;

winnerButton.addEventListener('click', () => {
    // Deshabilitar el botón mientras se está ejecutando el temporizador
    winnerButton.disabled = true;

    // Llamar a la función pickAWinner después de 5 segundos
    setTimeout(() => {
        const winner = pickAWinner();
        winnerName.textContent = winner;
        updateWinnersList(winner);

        // Habilitar el botón después de que se haya completado el temporizador
        winnerButton.disabled = false;
    }, 6000); // 5000 milisegundos = 5 segundos
});

function iniciarTemporizador() {
    var tiempoRestante = 5; // en segundos
    var btn = document.getElementById('countdownBtn');
    var winnerText = document.querySelector('.winner');

    // Deshabilitar el botón durante el temporizador
     btn.disabled = true;

    // Actualizar visualmente la cuenta regresiva cada segundo
    var temporizadorVisual = setInterval(function() {
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
    winnersList.appendChild(listItem);
};





