const contestants = ['@cintia_moturaa', '@noeantoalmada', '@metanoia_despertando_vamos', '@michelaok10', '@patricia_maydan', '@damaris.gimenez.946', '@yaninaamosso', '@dani.godoy18', '@rogallegos85', '@celestefernandez5589', '@debovipputo', '@jessisosa14', '@nare_2702', '@niqqi_cuervo', '@dahidossantoss', '@luu.7130', '@ale.eli.lopez', '@johagulle', '@de_laplata_soy', '@ivana268841', '@guada.a.09', '@roosario_g', '@valennn_ac', '@erika_loan4', '@floveron', '@mariadaniela.nany', '@nicole_uran09', '@dinosandali', '@sofijm2021', '@chiiaattii', '@pedrozomaria03', '@__julieta22', '@luuu_velardez', '@estetica_sol_sol_estetica', '@rocii_br', '@noetizi14', '@annafran148', '@micaelajaqueline28', '@viviana.virgili', '@sabryluna_ok', '@malee_lezcano97', '@agostina.030', '@theroshow6', '@caamibraun', '@pautheo', '@sofiaa.natasha', '@eenri_v', '@armonia.bienestar.reflex', '@mariateti5', '@rohcondoluchi', '@tamiz_perez', '@yohanaromano', '@lauragotte', '@bianca_delsanrru', '@s_maru_s', '@luci_velazquez163', '@taniia.ferreyra', '@pereyra_estrella46', '@fernandavillarreal256', '@acunayamilaok', '@alexandramendez24', '@marcelita_sayago', '@melii_bocaa', '@zekitozambraz', '@marianela_moraga23', '@hypegroups861', '@cecylia_vallej9', '@lauradaniela6738', '@vanesaquintanilla1', '@copa.2.df', '@melani3.777', '@michela8174', '@celees_gaarcia'
, '@ybarra.sasha', '@yesica___paola', '@yesiiialvarenga', '@yo_roomyy', '@yohanaromano'];
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





