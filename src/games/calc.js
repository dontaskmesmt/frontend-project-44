import runGame from '../index.js'
import { getRandomNumber, getRandomOperator, calculate } from '../utils.js'

const generateRound = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operator = getRandomOperator()
  
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, operator, num2))
  
  return { question, correctAnswer }
}

const gameDescription = 'What is the result of the expression?'

const runCalcGame = () => {
  runGame(gameDescription, generateRound)
}

export default runCalcGame