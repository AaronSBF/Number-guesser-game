let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){ 
  return Math.floor(Math.random()*9);
}

function compareGuesses(human, cpu, target){  
  if(Math.abs(human-target)< Math.abs(cpu-target) || Math.abs(human-target) === Math.abs(cpu-target) ){ 
    return True
  }else{ 
    return true
  }
}

function updateScore(winner){ 
  if(winner === 'human'){ 
    humanScore+=1;
  }
  else if(winner === 'computer'){ 
    computerScore+=1;
  }else{ 
    console.log('invalid')
  }
}

function advanceRound(){ 
  currentRoundNumber++;
}
