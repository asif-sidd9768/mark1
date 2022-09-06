const readLineSync = require('readline-sync')
const questions = require('./questions')

const user = {
  name: "",
  correct: 0,
  wrong: 0,
  total: 3
}

const welcome = () => {
  const name = readLineSync.question("What is your name? ")
  user.name = name
  console.log(`Hola! Welcome, ${user.name}.`)
}

const checkAnswer = (index, answer) => {
  if (answer.toLowerCase() === questions[index].answer) {
    user.correct++;
  } else {
    user.wrong++;
  }
}

const game = async () => {
  for (let i = 0; i < questions.length; i++) {
    const answer = readLineSync.question(questions[i].text)
    checkAnswer(i, answer)
  }
}

const displayResult = () => {
  console.log("\n\nThank you for playing")
  console.log('===========XXXXX===========')
  console.log(`Correct : ${user.correct}/${user.total}`)
  console.log(`Wrong : ${user.wrong}/${user.total}`)
  const perc = ((user.correct) / (user.total)) * 100
  console.log(`Percentage: ${perc.toFixed(2)}`)
}


welcome();
if (readLineSync.keyInYN("Do you want to begin? (Y or n)")) {
  game()
  displayResult()
} else {
  console.log("Thanks! for doing nothing!")
}