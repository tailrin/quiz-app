

//////////////////EVENT LISTENERS////////////////////////////


function handleFormSubmit(){
    $('form').submit(function(event){
        try {
            event.preventDefault();
            switch(STORE.eventTarget.id){
                case 'start': STORE.currentQuestion++; renderGameInfo(); renderQuestion(); break;
                case 'next' : STORE.currentQuestion++; renderQuestion(); renderGameInfo(); break;
                case 'js-b0': renderAnswer(); renderGameInfo(); break;
                case 'js-b1': renderAnswer(); renderGameInfo(); break;
                case 'js-b2': renderAnswer(); renderGameInfo(); break;
                case 'js-b3': renderAnswer(); renderGameInfo(); break;
                default : break;
            } 
        }catch (error) {
            
        }
    });
}

function handleClicks(){
    $('form').click(event => {
        STORE.eventTarget = event.target;
        console.log("a button was clicked");
        handleFormSubmit();
        $('#quiz').submit();
    });
}

function handleEnterKey(){
    $('#quiz').keypress(event => {
        if (event.key === "Enter"){
            STORE.eventTarget = event.target;
            console.log("the enter key was pressed");
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
