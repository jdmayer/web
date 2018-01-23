function getText(msg){
    if (currText != null){
        document.getElementById(currText).style.display = 'none';
    }
    currText = msg;
    text = true;
    showText();
}

function showText(){
    if(fight){
        currBG = 'textBackgroundFight';
        document.getElementById(currBG).style.display='block';
    }
    else{
        currBG = 'textBackgroundConversation';
        document.getElementById(currBG).style.display='block'; 
    }
    document.getElementById(currText).style.display='block'; 
}

function getOptions(msg){ 
    options = true;
    optionMsg = msg;
    showOptions();
}

function showOptions(){
    document.getElementById(optionMsg).style.display='block'; 

    window.addEventListener("keydown", function (e) { 
        if (fight && !options && e.keyCode == 13) {
            document.getElementById(optionMsg).style.display='none';         
        }
    });
}