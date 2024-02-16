const button = document.getElementById("btn");
// quiz
let quiz = document.getElementById("score-quiz");
let quizTotal = document.getElementById("score-total-quiz");
// long quiz
let longQuiz = document.getElementById("score-long-quiz");
let longQuizTotal = document.getElementById("score-total-long-quiz");
//display
let displayQuizzes = document.getElementById("display-total-quiz");
// project
let project = document.getElementById("score-project");
let projectTotal = document.getElementById("score-total-project");
// recitation
let recitation = document.getElementById("score-recitation");
let recitationTotal = document.getElementById("score-total-recitation");
// attendance
let attendance = document.getElementById("score-attendance");
let attendanceTotal = document.getElementById("score-total-attendance");
// display
let overAllPerformanceTask = document.getElementById("displayPerformanceTask");
// quarterly exam
let exam = document.getElementById("score-exam");
let examTotal = document.getElementById("score-total-exam");
//display examination
let displayExam = document.getElementById("display-exam");
//overall display
let displayGrades = document.getElementById("overall-grades");
//button

button.addEventListener("click", () => {
  //quizzes
  const getQuizValue = quiz.value / quizTotal.value;
  const getLongQuizValue = longQuiz.value / longQuizTotal.value;
  const quizzesValue = getQuizValue + getLongQuizValue;
  const multiplyQuizzes = parseInt(quizzesValue * 25) / 2;

  displayQuizzes.textContent = multiplyQuizzes + "%";

  //performance Task
  const getProjectValue = project.value / projectTotal.value;
  const getRecitationValue = recitation.value / recitationTotal.value;
  const getAttendanceValue = attendance.value / attendanceTotal.value;
  const overAllValue =
    getProjectValue + getRecitationValue + getAttendanceValue;
  const multiplyPt = (overAllValue * 50) / 3;

  overAllPerformanceTask.textContent = multiplyPt.toFixed(2) + "%";

  //examination
  const getExamValue = exam.value / examTotal.value;
  const multiplyExam = parseInt(getExamValue * 25);

  displayExam.textContent = multiplyExam + "%";

  const sum = multiplyQuizzes + multiplyPt + multiplyExam;

  displayGrades.textContent = sum.toFixed(2) + "%";
});

// identity
var a;
var b;

a = prompt("Enter your name:");
b = prompt("ID number:");

let nameEl = document.querySelector("#name");
let idNumber = document.querySelector("#id-learner");
nameEl.innerHTML = a;
idNumber.innerHTML = b;
