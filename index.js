

//////////////////EVENT LISTENERS////////////////////////////


function handleFormSubmit(){
    $('form').submit(function(event){
        try {
            event.preventDefault();
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
            
        }
    });
}

function handleClicks(){
    $('form').click(event => {
        STORE.eventTarget = event.target;
        console.log(`${event.target.id} was clicked`);
        handleFormSubmit();
        $('#quiz').submit();
    });
}

function handleEnterKey(){
    $('#quiz').keypress(event => {
        if (event.key === "Enter"){
            STORE.eventTarget = event.target;
            console.log(`${event.target.id} was selected`);
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
