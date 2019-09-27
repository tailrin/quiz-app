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

function startGame(){
    //this will render the form and start the quiz
    const randomNumber = generateRandomNumber();
    state = getState(randomNumber);
    removeState(randomNumber);
    const cities = shuffle(state.cities);
    console.log(cities);
    assignButtons(cities);
    $('form').html(generateQuestionHTML(state));

    //needs to deploy template with content

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
        STORE.buttons[i].city = city;
        i++; 
    });
}

function generateButtonItem(button){
    return `<li><button type="submit" class="ansButton js-ansButton" id="${button.id}">${button.city}</button></li>`
}

function generateQuestionHTML(state){
    const arr = ['<ul class="no-style">', askQuestion(state)];
    STORE.buttons.forEach(button => {
        arr.push(generateButtonItem(button));
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