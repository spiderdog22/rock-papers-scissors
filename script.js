console.log('Hello world!')

let computerPoints = 0
let humanPoints = 0

let getComputerChoice = () => {
    const options = [ 'rock', 'paper', 'scissors' ]
    let randomNumber = Math.random()
    let module = (randomNumber * 100) % 3
    return options[Math.trunc(module)]
}

let getHumanChoice = () => {
    let answer = 'no-choice'

    do {
        answer = prompt('Rock, paper, scissors. Enter a value: ', 0).toLowerCase()
    } while( answer != 'rock' && answer != 'paper' && answer != 'scissors' )

    return answer
}

let capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}

let playRound = (humanChoice, computerChoice) => {
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
        return `${matchStatus} ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
    }

    if (matchStatus === 'You lose!') {
        return `${matchStatus} ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
    }

}

let compCh = getComputerChoice()
let humanCh = getHumanChoice()

console.log(playRound(humanCh, compCh))