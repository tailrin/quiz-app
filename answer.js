


//////////////ANSWER FUNCTIONS//////////////



function generateDisabledButtonItem(button){
    if(button.selected === true && button.correct === true){
        STORE.score++;
        console.log('score was incremented');
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct-selected" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.correct === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.selected === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton selected" id="${button.id}" disabled>${button.city}</button></li>`;
    } else {
        return `<li class="adjustable-fill"><button type="submit" class="ansButton" id="${button.id}" disabled>${button.city}</button></li>`;
    }
}

function generateNextButton(){
    if(STORE.currentQuestion === 15){
        return `<li><button type="submit" class="ansButton" id="end">See Results</button></li>`;
    }
    return `<li><button type="submit" class="ansButton" id="next">Next Question</button></li>`; 
}

function generateAnswerHTML(state){
    const arr = ['<ul class="no-style center-contents">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        if(button.id === STORE.eventTarget.id){
            button.selected = true;
            if(button.correct === true){
                STORE.answerQuality = '<li><img src="images/correct.png" alt="green checkmark"><span id="answer-quality">You got it right!</span></li>';
            }else{
                STORE.answerQuality = '<li><img src="images/wrong.png" alt="red x"><span id="answer-quality">You got it wrong.</span></li>';
            }
        }
        arr.push(generateDisabledButtonItem(button));
        console.log(`disabled button ${button.id} was generated`);
    });

    arr.push(STORE.answerQuality, generateNextButton(), '</ul>');
    console.log("answer html was generated");
    resetStoredValues();
    console.log(`stored values reset`)
    return arr.join('');
}

function renderAnswer(){
    $('form').empty();
    $('form').html(generateAnswerHTML(STORE.state));
    console.log("the answer was rendered")
}

