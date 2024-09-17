console.log('Hello world!')

let computerPoints = 0
let humanPoints = 0

const getComputerChoice = () => {
    const options = [ 'rock', 'paper', 'scissors' ]
    let randomNumber = Math.random()
    let module = (randomNumber * 100) % 3
    return options[Math.trunc(module)]
}

const getHumanChoice = () => {
    let answer = 'no-choice'

    do {
        answer = prompt('Rock, paper, scissors. Enter a value: ', 0).toLowerCase()
    } while( answer != 'rock' && answer != 'paper' && answer != 'scissors' )

    return answer
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return 'You tie!'
    }

    let matchStatus = 'noone'

    // Win cases
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        matchStatus = 'You won!'
    }

    // Lose cases
    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
        matchStatus = 'You lose!'
    }

    if (matchStatus === 'You won!') {
        humanPoints++;
        return `${matchStatus} ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
    }

    if (matchStatus === 'You lose!') {
        computerPoints++;
        return `${matchStatus} ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
    }

}

const resetGame = () => {
    humanPoints = 0
    computerChoice = 0
}

const playGame = () => {
    const numRounds = 5;

    resetGame()
    for (let i = 0; i < numRounds; i++)
    {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()

        let result = playRound(humanChoice, computerChoice)
        console.log(result)
    }

    console.log('Final results!')
    console.log(` - your points: ${humanPoints}`)
    console.log(` - computer points: ${computerPoints}`)
}