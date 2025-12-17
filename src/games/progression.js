import runGame from '../index.js'
import { getRandomNumber, generateProgression, hideElementInProgression } from '../utils.js'

const generateRound = () => {
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)
  
  const progression = generateProgression(start, step, length)
  const question = hideElementInProgression(progression, hiddenIndex)
  const correctAnswer = String(progression[hiddenIndex])
  
  return { question, correctAnswer }
}

const gameDescription = 'What number is missing in the progression?'

const runProgressionGame = () => {
  runGame(gameDescription, generateRound)
}

export default runProgressionGame