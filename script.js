let startButton = document.querySelector('#start-button');
let rockButton = document.querySelector('#ctrl-rock');
let paperButton = document.querySelector('#ctrl-paper');
let scissorsButton = document.querySelector('#ctrl-scissors');
let gameStatusMsg = document.querySelector('.gcs-game-status');
let humanPointsElement = document.querySelector('#human-points');
let computerPointsElement = document.querySelector('#computer-points');

let computerPoints = 0
let humanPoints = 0
const MAX_POINTS = 4;

let gameStatus = 'idle';

const startButtonHandler = () => {
    if (gameStatus === 'idle') {
        setUpGameGUI();
        gameStatus = 'playing';
        gameStatusMsg.textContent = 'Waiting for human...';
    } else if (gameStatus === 'playing') {
        resetGameGui();
        resetPoints();
        gameStatus = 'idle';
    }
};

const processRound = (evt) => {
    let humanChoice = evt.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    if (result === 'you win')
        humanPoints++;
    else if (result === 'you lose')
        computerPoints++;
    
    gameStatusMsg.textContent = getRoundMessage(result, humanChoice, computerChoice);
    setGuiPoints(humanPoints, computerPoints);

    if (humanPoints > MAX_POINTS || computerPoints > MAX_POINTS)
        startButton.dispatchEvent(new Event('click'));
};

startButton.addEventListener('click', startButtonHandler);
rockButton.addEventListener('click', processRound);
paperButton.addEventListener('click', processRound);
scissorsButton.addEventListener('click', processRound);

const getComputerChoice = () => {

    const options = [ 'rock', 'paper', 'scissors' ]
    let randomNumber = Math.random()
    let module = (randomNumber * 100) % 3
    return options[Math.trunc(module)]
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return 'you tie';
    }

    // Win cases
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        matchStatus = 'you win';
    }

    // Lose cases
    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
        matchStatus = 'you lose';
    }

    return matchStatus;
}

const getRoundMessage = (result, humanChoice, computerChoice) => {
    if (result === 'you tie')
        return `${capitalize(result)}!`;

    if (result === 'you win')
        return `${capitalize(result)}! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`

    if (result === 'you lose')
        return `${capitalize(result)}! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`

    return 'Unknown result!';
};

const resetPoints = () => {
    humanPoints = 0
    computerPoints = 0
}

const setUpGameGUI = () => {
    startButton.textContent = 'Reset';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
};

const resetGameGui = () => {
    startButton.textContent = 'PLAY GAME';
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    setGuiPoints(0, 0);
};

const setGuiPoints = (humanPoints, computerPoints) => {
    humanPointsElement.textContent = humanPoints;
    computerPointsElement.textContent = computerPoints;
};
