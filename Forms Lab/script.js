let answers = {
  q1: ['centralprocessingunit', 'cpu'],
  q2: ['memory'],
  q3: ['cpu', 'centralpu'],
  q4: ['harddrive', 'hard drive'],
  q5: ['internetprotocol'],
}
const btn = document.getElementById('submit-btn')
const output = document.getElementById('output')

function CheckAnswers() {
  let score = 0
  let results = ''
  // Question one
  let question1 = document
    .getElementsByName('question1')[0]
    .value.trim()
    .toLowerCase()

  if (answers.q1.includes(question1)) {
    score++
    results += 'Q1: correct!\n'
  } else {
    results += 'Q1: Incorrect.\n'
  }

  // Question 2
  let question2 = Array.from(document.getElementsByName('q2'))
  let selected = question2.find((radio) => radio.checked)
  if (selected && answers.q2.includes(selected.value.trim().toLowerCase())) {
    score++
    results += 'Q2: Correct!\n'
  } else {
    results += 'Q2: Incorrect.\n'
  }

  // Question 3
  let question3 = Array.from(document.getElementsByName('question3'))
  let userChecked = []
  question3.forEach((element) => {
    if (element.checked) {
      userChecked.push(element.value.trim().toLowerCase())
    }
  })
  isCorrect = true
  answers.q3.forEach((correctAnswer) => {
    if (!userChecked.includes(correctAnswer)) {
      isCorrect = false
    }
  })

  if (userChecked.length !== answers.q3.length) {
    isCorrect = false
  }
  if (isCorrect) {
    score++
    results += 'Q3: Correct!\n'
  } else {
    results += 'Q3: Incorrect.\n'
  }

  // Question 4
  let question4 = document
    .getElementsByName('question4')[0]
    .value.trim()
    .toLowerCase()

  if (answers.q4.includes(question4)) {
    score++
    results += 'Q4: correct!\n'
  } else {
    results += 'Q4: Incorrect.\n'
  }

  // Question 5
  let question5 = document
    .getElementsByName('question5')[0]
    .value.trim()
    .toLowerCase()
  if (answers.q5.includes(question5)) {
    score++
    results += 'Q5: correct!\n\n'
  } else {
    results += 'Q5: Incorrect.\n'
  }

  console.log(score)
  results += `Your total score: ${score} / 5`
  document.getElementById('output').textContent = results
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  CheckAnswers()
})
