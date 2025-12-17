import runGame from '../index.js'
import { getRandomNumber, gcd } from '../utils.js'

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))
  
  return { question, correctAnswer }
}

const gameDescription = 'Find the greatest common divisor of given numbers.'

const runGcdGame = () => {
  runGame(gameDescription, generateRound)
}

export default runGcdGame