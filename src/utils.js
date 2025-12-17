import readlineSync from 'readline-sync'

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const askQuestion = (question) => {
  return readlineSync.question(question)
}

export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

export const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

export const nod = (a, b) => {
  if (b === 0) {
    return Math.abs(a)
  }
  return nod(b, a % b)
}

export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

export const hideElementInProgression = (progression, hiddenIndex) => {
  const hiddenProgression = [...progression]
  hiddenProgression[hiddenIndex] = '..'
  return hiddenProgression.join(' ')
}