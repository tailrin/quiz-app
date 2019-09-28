


/////////////////Game Info Functions/////////////


function renderGameInfo(){
    $('#game-info').html(`<span id="question" class="game-info">Question: ${STORE.currentQuestion}/15</span><span id="score" class="game-info">Score: ${STORE.score}/${STORE.currentQuestion}</span>`);
    console.log('game info was rendered')
}

