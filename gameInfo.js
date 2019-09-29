


/////////////////Game Info Functions/////////////


function renderGameInfo(ansOrQuestion){
    switch(ansOrQuestion){
            case 'ans': $('#game-info').html(`<span id="question" class="game-info">Question: ${STORE.currentQuestion}/15</span><span id="score" class="game-info">Score: ${scoreAsPercentage(0)}%</span>`);
            console.log('game info was rendered'); break;
            case 'question': $('#game-info').html(`<span id="question" class="game-info">Question: ${STORE.currentQuestion}/15</span><span id="score" class="game-info">Score: ${scoreAsPercentage(1)}%</span>`);
            console.log('game info was rendered'); break;
            default: $('#game-info').html(`<span id="question" class="game-info">Question: ${STORE.currentQuestion}/15</span><span id="score" class="game-info">Score: No Score Yet</span>`);
            console.log('game info was rendered');break;

    }
}

function scoreAsPercentage(num){
    return Math.round(STORE.score/(STORE.currentQuestion - num) * 100);
}