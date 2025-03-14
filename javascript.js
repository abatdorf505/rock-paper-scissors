function getComputerChoice() {
    // Pick a random integer from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
};

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?", "");
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let isOver = false;

    let results = document.querySelector(".results");
    let scores = document.querySelector(".scores");
    let winner = document.querySelector(".winner");

    function playRound(humanChoice, computerChoice) {
        // Capitalize only first letter of human choice to match computer choice
        humanChoice = humanChoice.at(0).toUpperCase() + 
        humanChoice.toLowerCase().slice(1);

        let roundWinner;
        if (
        humanChoice === "Rock" && computerChoice === "Scissors" || 
        humanChoice === "Paper" && computerChoice === "Rock" || 
        humanChoice === "Scissors" && computerChoice === "Paper"
        ) {
            roundWinner = "human";   
        } else if (humanChoice === computerChoice) {
            roundWinner = "tie";
        } else {
            roundWinner = "computer";
        };
    
        if (roundWinner === "human") {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (roundWinner === "computer") {
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else {
            results.textContent = `It's a tie! You both chose ${humanChoice}`;
        };

        scores.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    };

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!isOver) {
                playRound(button.textContent, getComputerChoice());

                if (humanScore === 5 || computerScore === 5) {
                    if (humanScore > computerScore) {
                        winner.textContent = "You win the game!";
                        winner.textContent += " Refresh to play again!";
                    } else {
                        winner.textContent = "The computer won the game...";
                        winner.textContent += " Refresh to play again!";
                    }
            
                    isOver = true;
                };
            };
        });
    });
};

playGame();