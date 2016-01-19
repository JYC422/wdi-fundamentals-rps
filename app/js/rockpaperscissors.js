////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {

    if (playerMove === 'rock' && computerMove === 'scissors') {
        return 'Player';
    } else if (playerMove === 'scissors' && computerMove=== 'rock') {
        return 'Computer';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        return 'Computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        return 'Player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        return 'Player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        return 'Computer';
    } else if (playerMove === 'rock' && computerMove === 'rock') {
        return 'Tie';
    } else if (playerMove === 'paper' && computerMove === 'paper') {
        return 'Tie';
    } else if (playerMove === 'scissors' && computerMove === 'scissors') {
        return 'Tie';
    } else {
        return 'Try' + ' ' + 'again!';
    }
}

function playToFive(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tieGame = 0;

    while (playerWins < 5 && computerWins < 5) {
         var playerMove = getPlayerMove();
         var computerMove = getComputerMove();
         var winner = getWinner(playerMove,computerMove);

    if (winner === 'Player') {
            playerWins++;
            console.log('Player chose ' + playerMove);
            console.log('Computer chose ' + computerMove);
    } else if (winner === 'Computer') {
            computerWins++;
            console.log('Player chose ' + playerMove);
            console.log('Computer chose ' + computerMove);
    } else if (winner === 'Tie') {
            console.log('Player chose ' + playerMove);
            console.log('Computer chose ' + computerMove);
            console.log('It is a Tie');
    }
        console.log('Winner : ' + winner);
    }
    return [playerWins, computerWins];
}
playToFive();
