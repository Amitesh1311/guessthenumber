let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");
let audio = new Audio("music.wav");


const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
}
const startGame=()=>{
    document.getElementById("mainWindow").style.display="none";
    document.getElementById("gameArea").style.display="block";

};

//reload page

const newGameBegin=()=>{
  audio.play();
  window.location.reload();
 
}
// main logic of our game

const startNewgame=()=>{
    audio.play();
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);

}


const compareGuess=()=>{
    audio.play();
    const userNumber=Number(document.getElementById("inputBox").value);
    userGuess= [ ... userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;

// main logic
if(userGuess.length<maxGuess){
if(userNumber>computerGuess){
    userGuessUpdate.innerHTML="Your guess is high 😯";
    userNumberUpdate.value="";
}
else if(userNumber<computerGuess){
    userGuessUpdate.innerHTML="Your guess is low 🥱";
    userNumberUpdate.value="";
}
else{
    userGuessUpdate.innerHTML="Its Corect 😀";
    userNumberUpdate.value="";
    startNewgame();
}
}
else{
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML=`You Loose 😰!! Correct number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewgame();
    }
    else if(userNumber<computerGuess){
        userGuessUpdate.innerHTML=`You Loose 😰!! Correct number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewgame();
    }
    else{
        userGuessUpdate.innerHTML="Its Corect 😀";
        userNumberUpdate.value="";
        startNewgame();
    }
}

document.getElementById("attempts").innerHTML=userGuess.length;
};



const easyMode=()=>{
    audio.play();
    maxGuess=10;
    startGame();
};
const hardMode=()=>{
    audio.play();
    maxGuess=5;
    startGame();
};