//////////////////////PREPATORY FUNCTIONS/////////////////


STORE.stateArr = STORE.states.slice(0);

function getState(num) {
    console.log(`random state was grabbed`);
    return STORE.stateArr[num];
    
}

function removeState(num) {
    console.log(`${STORE.stateArr[num]} was removed`);
    STORE.stateArr.splice(num, 1)
}

function generateRandomNumber(){
    console.log(`a random number was generated`);
    return Math.floor(Math.random() * STORE.stateArr.length);
}

function assignButtons(cities) {
    let i = 0;
    cities.forEach(city =>{
        if(city === STORE.state.capital){STORE.buttons[i].correct = true;}
        STORE.buttons[i].city = city;
        i++; 
    });
    console.log(`buttons were assigned`);
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
    console.log(`stored values were reset`);
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
    console.log(`array was shuffled`);
    return array;
  }

function prepareQuestionInfo(){
    resetStoredValues();
    const randomNumber = generateRandomNumber();
    STORE.state = getState(randomNumber);
    removeState(randomNumber);
    const cities = shuffle(STORE.state.cities);
    assignButtons(cities);
}