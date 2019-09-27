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
    if(button.correct === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.selected === true && button.correct === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton correct-selected" id="${button.id}" disabled>${button.city}</button></li>`;
    }else if(button.selected === true){
        return `<li class="adjustable-fill"><button type="submit" class="ansButton selected" id="${button.id}" disabled>${button.city}</button></li>`;
    } else {
        return `<li class="adjustable-fill"><button type="submit" class="ansButton" id="${button.id}" disabled>${button.city}</button></li>`;
    }
}

function setButtonToSelected(button){
    button = STORE.buttons.indexOf(element => {return element.id === button.id;});
    button.selected = true;
}

function generateAnswerHTML(state){
    const arr = ['<ul class="no-style center-contents">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        arr.push(generateDisabledButtonItem(button));
    });
    arr.push('</ul>');
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



/* <ul class="no-style">
    
    
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b2"></button></li>
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b3"></button></li>
    <li></li><button type="submit" class="ansButton js-ansButton" id="js-b4"></button></li>
    <li></li><label id="js-result" class="hidden"><img src="images/check-mark-1292787_640.png">Correct</label></li>
</ul>
<nav class="hidden">
<button type="submit" class="ansButton" id="js-b6">Re-take Quiz</button>
</nav>*/