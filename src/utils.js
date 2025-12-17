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

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a)
  }
  return gcd(b, a % b)
}