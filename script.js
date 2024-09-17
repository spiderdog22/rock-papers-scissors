console.log('Hello world!')

const options = [ 'rock', 'paper', 'scissors' ]

let getComputerChoice = () => {
    let randomNumber = Math.random()
    let module = (randomNumber * 100) % 3
    return options[Math.trunc(module)]
}

