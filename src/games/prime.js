import runGame from '../index.js'
import { getRandomNumber, isPrime } from '../utils.js'

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  
  return { question, correctAnswer }
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const runPrimeGame = () => {
  runGame(gameDescription, generateRound)
}

export default runPrimeGame