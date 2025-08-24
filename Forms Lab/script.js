let answers = {
  q1: ['central processing unit', 'cpu'],
  q2: 'memory',
  q3: ['cpu', 'centralpu'],
  q4: 'Harddrive',
  q5: 'InternetProtocol',
}
const btn = document.getElementById('submit-btn')
const output = document.getElementById('output')
let correctAnswer = false
let correctAnswer1 = false

function CheckAnswers() {
  try {
    let question1 = document
      .getElementsByName('question1')[0]
      .value.trim()
      .toLowerCase()

    if (answers.q1.includes(question1)) {
      correctAnswer = true
    } else {
      correctAnswer = false
    }
    output.textContent = `You Said1 = ${question1}, ${correctAnswer}`

    let question2 = document.getElementsByName('q2')

    for (let i = 0; i < question2.length; i++) {
      if (question2.checked === true) {
        let data = question2.checked.value.trim().toLowerCase()
        if (data == answers.q2) {
          correctAnswer1 = true
        } else {
          correctAnswer1 = false
        }
      }
    }

    output.textContent = `You Said2 = ${question2}, ${correctAnswer1}`
  } catch (e) {
    console.log('An error occurred getting data!')
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  CheckAnswers()
})
