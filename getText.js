function getText(msg){
    currText = msg;
    text = true;
    //console.log('getText: ' + text + msg);
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
   // console.log("f: / t: " + fight + text + currText);
}

function getOptions(msg){ 
    //console.log("SHOW "+ msg);
    options = true;
    optionMsg = msg
    showOptions()
}

function showOptions(){
    document.getElementById(optionMsg).style.display='block'; 

    window.addEventListener("keydown", function (e) { 
        if (fight && !options && e.keyCode == 13) {
           // console.log("BYE BYE "+optionMsg);
            document.getElementById(optionMsg).style.display='none';         
        }
    });
}