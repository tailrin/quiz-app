//////////////////////PREPATORY FUNCTIONS/////////////////


STORE.stateArr = STORE.states;

function getState(num) {
    return STORE.stateArr[num];
}

function removeState(num) {
    STORE.stateArr.splice(num, 1)
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 50);
}

function assignButtons(cities) {
    let i = 0;
    cities.forEach(city =>{
        if(city === STORE.state.capital){STORE.buttons[i].correct = true;}
        STORE.buttons[i].city = city;
        i++; 
    });
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

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function getButtonIndexById(id){
    return STORE.buttons.findIndex(button => {
        button.id === id;
    });
}

function prepareQuestionInfo(){
    resetStoredValues();
    const randomNumber = generateRandomNumber();
    STORE.state = getState(randomNumber);
    removeState(randomNumber);
    const cities = shuffle(STORE.state.cities);
    assignButtons(cities);
}