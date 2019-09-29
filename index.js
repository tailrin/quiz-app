

//////////////////EVENT LISTENERS////////////////////////////


function handleFormSubmit(){
    $('form').submit(function(event){
        try {
            event.preventDefault();
            console.log(STORE.eventTarget.id); 
            switch(STORE.eventTarget.id){
                case 'retake':  
                case 'start' : 
                case 'next'  : renderQuestion(); renderGameInfo(); break;
                case 'js-b0' : 
                case 'js-b1' : 
                case 'js-b2' : 
                case 'js-b3' : renderAnswer(); renderGameInfo(); break;
                case 'end'   : renderEndGame(); break;
                default : break;
            }
        }catch (error) {
            if(`${error}`.includes(`Cannot read property 'id' of undefined`)){

            } else{
                console.log(error);
            }
        }
    });
}

function handleClicks(){
    $('form').click(event => {
        redirectToFormSubmission();
    });
}

function handleEnterKey(){
    $('#quiz').keypress(event => {
        if (event.key === "Enter"){
            redirectToFormSubmission();
        }
    });
}

function redirectToFormSubmission(){
    STORE.eventTarget = event.target;
    console.log(`${event.target.id} was selected`);
    console.log('event was redirected to form submission');
    handleFormSubmit();
    $('#quiz').submit();
}

function callBack(){
    handleEnterKey();
    handleClicks();
}


callBack(); 
