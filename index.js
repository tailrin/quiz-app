//render form
//retrieve question information
//assign buttons
//assign labels
//handle start button
//handle answer buttons
//disable buttons
//move on to next question
//restart game

const stateArr = getStateArr();

function renderQuestion(){
    //this will render the form and start the quiz
    resetStoredValues();
    const randomNumber = generateRandomNumber();
    STORE.state = getState(randomNumber);
    removeState(randomNumber);
    const cities = shuffle(STORE.state.cities);
    console.log(cities);
    assignButtons(cities);
    $('form').empty();
    $('form').html(generateQuestionHTML(STORE.state));
}

function renderAnswer(){
    $('form').empty();
    $('form').html(generateAnswerHTML(STORE.state));
}

function getStateArr(){
    return STORE.states;
}

function getState(num) {
    // this will retrieve a state
    return stateArr[num];
}

function removeState(num) {
    //this will remove state from list so the same question is not asked again
    stateArr.splice(num, 1)
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 50);
}

function assignButtons(cities) {
    //this will assign values to the buttons in the form
    let i = 0;
    cities.forEach(city =>{
        if(city === STORE.state.capital){STORE.buttons[i].correct = true;}
        STORE.buttons[i].city = city;
        i++; 
    });
}

function generateButtonItem(button){
    return `<li class="adjustable-fill"><button type="submit" class="ansButton" id="${button.id}">${button.city}</button></li>`
}

function generateQuestionHTML(state){
    const arr = ['<ul class="no-style center-contents">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        arr.push(generateButtonItem(button));
    });
    arr.push('</ul>');
    return arr.join('');
}

function generateDisabledButtonItem(button){
    if(button.selected === true && button.correct === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct-selected" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.correct === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.selected === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton selected" id="${button.id}" disabled>${button.city}</button></li>`;
    } else {
        return `<li class="adjustable-fill"><button type="submit" class="ansButton" id="${button.id}" disabled>${button.city}</button></li>`;
    }
}

function getButtonById(id){
    return STORE.buttons.findIndex(button => { button.id === id;});
}

function generateNextButton(){
    return `<li><button type="submit" class="ansButton" id="next">Next Question</button></li>`;
}

function resetStoredValues(){
    STORE.buttons.forEach(button => {
        button.correct = false;
        button.selected = false;
        button.city = undefined;
    });
    STORE.answerQuality = undefined;
    STORE.eventTarget = undefined;
    STORE.state = undefined;
}

function generateAnswerHTML(state){
    const arr = ['<ul class="no-style center-contents">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        if(button.id === STORE.eventTarget.id){
            button.selected = true;
            if(button.correct === true){
                STORE.answerQuality = '<li><img src="images/correct.png" alt="green checkmark"><span>You got it right!</span></li>';
            }else{
                STORE.answerQuality = '<li><img src="images/wrong.png" alt="red x"><span>You got it wrong.</span></li>';
            }
        }
        arr.push(generateDisabledButtonItem(button));
    });

    arr.push(STORE.answerQuality, generateNextButton(), '</ul>');
    //resetStoredValues();
    return arr.join('');
}

function askQuestion(state) {
    //this will ask the question
    return `<li><span class="question">What is the capital of ${state.name}?</span></li>`;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function handleFormSubmit(){
    $('form').submit(function(event){
        try {
            event.preventDefault();
            switch(STORE.eventTarget.id){
                case 'start':
                case 'next' : renderQuestion(); break;
                case 'js-b0': 
                case 'js-b1':
                case 'js-b2':
                case 'js-b3': renderAnswer(); break;
                default : break;
            } 
        }catch (error) {
            
        }
    });
}

function handleClicks(){
    $('form').click(event => {
        STORE.eventTarget = event.target;
        handleFormSubmit(event.target);
        $('#quiz').submit();
    });
}

function handleEnterKey(){
    $('#quiz').keypress(event => {
        if (event.key === "Enter"){
            STORE.eventTarget = event.target;
            handleFormSubmit();
            $('#quiz').submit();
        }
    });
}

function callBack(){
    handleEnterKey();
    handleClicks();
}


callBack(); 


/* <ul class="no-style">
    
    
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b2"></button></li>
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b3"></button></li>
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b4"></button></li>
    <li></li><label id="js-result" class="hidden"><img src="images/check-mark-1292787_640.png">Correct</label></li>
</ul>
<nav class="hidden">
<button type="submit" class="ansButton" id="js-b6">Re-take Quiz</button>
</nav>*/