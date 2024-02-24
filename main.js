const winnerButton = document.querySelector('button');
const winnerName = document.querySelector('.winner');
const winnersList = document.querySelector('.winners-list');

const contestants = ["Daniel", "tomás", "martin", "matias", "marcos"];
let firstTime = true;

const pickAWinner = () => {
const winningNumber = Math.floor(Math.random() * contestants.length);
 const winner = contestants[winningNumber];
return winner;   }


const updateWinnersList = (winner) => {
    const listItem = document.createElement('li');
    listItem.textContent = winner;
    winnersList.appendChild(listItem);
};

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
