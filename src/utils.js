import readlineSync from 'readline-sync'

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const askQuestion = (question) => {
  return readlineSync.question(question)
}