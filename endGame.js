


//////////////END GAME FUNCTIONS/////////////////////




function renderEndGame(){
    $('form').empty();
    $('form').html(generateEndGameHTML());
    STORE.stateArr = STORE.states.slice(0);
    resetStoredValues();
    console.log("the end game was rendered")
}

function generateResults(){
    let result = ``
    switch(true){
        case (STORE.score < 8) : result = `You didn't do so well.`; break;
        case (STORE.score < 12): result = `You did ok.`; break
        case (STORE.score < 14): result = `You did really well!`; break;
        case (STORE.score < 15): result = `Missed it by that much!`; break;
        default:  result = `Fantastic!!  You got a perferct score!!`; break;
    }
    console.log(`The result of the game was generated`);
    return `<li><section id="results">${result} You scored ${STORE.score}/15</section></li>`;
}

function generateRetakeQuizButton(){
    console.log(`the retake quiz button was generated`);
    return `<li><button type="submit" class="ansButton" id="retake">Re-take Quiz</button></li>`;
}

function generateEndGameHTML(){
    const arr = ['<ul class="no-style center-contents">', generateResults(), generateRetakeQuizButton(), `</ul>`];
    console.log(`The end game HTML was generated`);
    STORE.currentQuestion = 0;
    STORE.score = 0;
    return arr.join('');
}

