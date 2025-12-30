let score = JSON.parse(localStorage.getItem('score')) 
if(score === null ){
    score = {
            wins : 0,
            loses : 0,
            tie : 0
    } 
}

updateScoreElement();

function finalResult(userMove){
    let computerGuess = Math.random();
    let computerPick = '';
    let result = ''
    if (computerGuess > 0 && computerGuess < 1/3){
        computerPick = 'Rock';
    }
    else if (computerGuess > 1/3 && computerGuess < 2/3){
        computerPick = 'Paper';
    }
    else if (computerGuess > 2/3 && computerGuess < 1){
        computerPick = 'Scissor';
    }
    if (userMove === 'Rock'){
        if (computerPick == 'Rock'){
                result = 'Tie.';
        } 
        else if (computerPick == 'Paper'){
                result = 'You Lose.';
        } 
        else if (computerPick == 'Scissor'){
                result = 'You Win.';
        } 

    }

    if (userMove === 'Paper'){
        if (computerPick === 'Rock'){
                result = 'You Win.';
        } 
        else if (computerPick === 'Paper'){
                result = 'Tie.';
        } 
        else if (computerPick === 'Scissor'){
                result = 'You Lose.';
        } 
    }

    if (userMove === 'Scissor'){
        if (computerPick === 'Rock'){
                result = 'You Lose.';
        } 
        else if (computerPick === 'Paper'){
                result = 'You Win.';
        } 
        else if (computerPick === 'Scissor'){
                result = 'Tie.';
        } 
        
    }

    if (result === 'You Win.'){
        score.wins += 1;
    }
    else if (result === 'You Lose.'){
        score.loses += 1;
    }
    else if (result === 'Tie.'){
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${userMove.toLowerCase()}.jpg" class="move-icon">
        <img src="images/${computerPick.toLowerCase()}.jpg" class="move-icon">
        Computer`;
        
}  
function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.wins} Loses : ${score.loses} Tie : ${score.tie}`;
    console.log(score);
}