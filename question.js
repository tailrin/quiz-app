

//////////////////QUESTION FUNCTIONS/////////////////



function generateButtonItem(button){
    return `<li class="adjustable-fill"><button type="submit" class="ansButton" id="${button.id}">${button.city}</button></li>`
}

function askQuestion(state) {
    return `<li><span class="question">What is the capital of ${state.name}?</span></li>`;
}

function generateQuestionHTML(state){
    const arr = ['<ul class="no-style center-contents">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        arr.push(generateButtonItem(button));
        console.log(`button ${button.id} was generated`)
    });
    arr.push('</ul>');
    console.log('question html was generated')
    return arr.join('');
}

function renderQuestion(){
    prepareQuestionInfo();
    $('form').empty();
    $('form').html(generateQuestionHTML(STORE.state));
    STORE.currentQuestion++;
    console.log('currentQuestion was incremented');
    console.log('the question was rendered')
}
