const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();


if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
} else {
  return 'You must be select Rock,Paper or Scissors';

}
  
}




function getComputerChoice () {

let pcSelect = '';
let randomNumber = 1;

randomNumber = Math.floor(Math.random() * 3)

switch (randomNumber) {
  case 0:
    pcSelect = 'rock';
    return pcSelect;
  case 1:
    pcSelect = 'paper';
    return pcSelect;
  case 2: 
    pcSelect = 'scissors';
    return pcSelect;
    break;
    
}
 return getComputerChoice ;

}




function determineWinner (userChoice,computerChoice) {
  if (userChoice == computerChoice) {
    return 'Draw!';
  }

if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'You Lost!';
    }else if (computerChoice === 'scissors'){
      return 'You win!';
    }else {
      return 'error!';
    }
  }  

if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'You Lost!';
    }else if (computerChoice === 'rock'){
      return 'You win!';
    }else {
      return 'error!';
    }
  } 

if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'You Lost!';
    }else if (computerChoice === 'paper'){
      return 'You win!';
    }else {
      return 'error!';
    }
  } 


}

function playGame () {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();

  console.log('Senin seçimin :'+userChoice);
  console.log('Bilgisayarın seçimi :'+computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
}

playGame();















