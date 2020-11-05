window.onload = () => {

    document.getElementById('start-button').onclick = () => {
        startGame();
    };
}


    function startGame() {
    
        
    const startScreen = document.querySelector('.center')
    
        startScreen.style.display = 'none'

    const looserScreen = document.querySelector('#loosediv')

        looserScreen.style.display = 'none'

    const winnerScreen = document.querySelector('#windiv')

        winnerScreen.style.display = 'none'

        Game.init("myCanvas");

    };

   






