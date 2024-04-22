let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencomputerChoice = () =>{
    const options =["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = () =>{
    
    msg.innerText="Game was draw.play again.";
    msg.style.backgroundColor=" #rgb(8, 1, 15";
};
const showWinner = (userWin,userchoice,compchoice) => {
if(userWin){

    userScore++;
    userScorePara.innerText= userScore;
    
    msg.innerText=`you win!  compuetr choose ${compchoice} and ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green"
}else{
    compScore++;
    compScorePara.innerText =compScore;

    msg.innerText=`you lost. computer choose ${compchoice} and ${compchoice} beats your  ${userchoice} `;
    msg.style.backgroundColor="red"
}
}

const playGame = (userchoice) =>{
console.log("userchoice= ",userchoice);
//Generate computer choice -> modular
const compchoice = gencomputerChoice();
console.log("comp choice= ",compchoice);
if(userchoice === compchoice) {
 //draw Game
 drawGame();
} else {
    let userWin = true;
    if(userchoice == "rock"){
        //scissors,paper
        userwun=compchoice === "paper"? false:true;

    }else if(userchoice==="paper"){
        //rock,scissors
      userWin=  compchoice==="scissors" ? false : true;
    } else{
        //rock,paper
        userWin = compchoice==="rock" ? false:true;
    }
    showWinner(userWin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");

playGame(userchoice);
    });
        
        
        
});