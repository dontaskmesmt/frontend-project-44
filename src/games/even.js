import { getRandomNumber, askQuestion } from '../utils.js'

const isEven = (number) => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  
  return {
    question: `Question: ${number}`,
    correctAnswer,
  }
}

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  
  const name = askQuestion('May I have your name? ')
  console.log(`Hello, ${name}!`)
  
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  
  const roundsCount = 3
  
  for (let i = 0; i < roundsCount; i += 1) {
    const round = generateRound()
    console.log(round.question)
    
    const userAnswer = askQuestion('Your answer: ')
    
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    
    if (userAnswer !== round.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    
    console.log('Correct!')
  }
  
  console.log(`Congratulations, ${name}!`)
}

export default runEvenGame