let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");

const genComChoice=() =>{
    const choice=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return choice[randIdx];               
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor="red"
    }
}

const playgame= (userChoice)=> {
    //Generate computer choice
    const compChoice=genComChoice();

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
       let userWin=true;
       if(userChoice==="rock"){
        //scissors, paper
        userWin= compChoice === "paper" ? false : true;
       } else if(userChoice==="scissors"){
        //paper, rock
        userWin= compChoice === "paper" ? true : false;
       } else {
        //rock,paper
        userWin= compChoice ==="rock" ? false : true;
       }
       showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    }
    )
})