//Quizzes
//Quiz
let valueQuiz = document.getElementById("quiz");
let totalQuiz = document.getElementById("total-quiz");
//Long Test
let valueLongQuiz = document.getElementById("long-quiz");
let totalLongQuiz = document.getElementById("total-long-quiz");
//function button to get the grade of Quizzes
let btnOverAllQuiz = document.getElementById("overall-quizzes");
//display overall grade of Quizzes
let displayQuiz = document.getElementById("display-quizzes");
//Performance Task
// project
let valueProject = document.getElementById("project");
let totalProject = document.getElementById("total-project");
//recitation
let valueRecitation = document.getElementById("recitation");
let totalRecitation = document.getElementById("total-recitation");
//attendance
let totalAttendance = document.getElementById("total-attendance");
let valueAttendance = document.getElementById("attendance");
//function button to get the grade of Performance Task
let btnOverAllPt = document.getElementById("overall-pt");
//display pt
let displayPerformanceTask = document.getElementById("display-pt");
//examination
let valueExam = document.getElementById("exam");
let totalExam = document.getElementById("total-exam");
//function button to get the grade of Quarterly Exam
let btnExam = document.getElementById("overall-exam");
//display of exam
let displayExam = document.getElementById("display-exam");
//overall grades
let btnOverAllGrades = document.getElementById("overall-grades");
//compute overall grades
let valueOfOverallGrades = document.getElementById("compute-overall-grades");

let totalArr = [];

//Quizzes Button
btnOverAllQuiz.addEventListener("click", () => {
  const getQuizValue = valueQuiz.value;
  const multiplyQuiz = Math.round(getQuizValue * 0.1);
  totalQuiz.textContent = multiplyQuiz;

  const getLongQuizValue = valueLongQuiz.value;
  const multiplyLongQuiz = Math.round(getLongQuizValue * 0.15);
  totalLongQuiz.textContent = multiplyLongQuiz;

  const overAllQuizzes = multiplyQuiz + multiplyLongQuiz;
  displayQuiz.textContent = overAllQuizzes + "%";
});

//Performance Task Button

btnOverAllPt.addEventListener("click", () => {
  const getProjectValue = valueProject.value;
  const multiplyProject = Math.round(getProjectValue * 0.35);
  totalProject.textContent = multiplyProject;

  const getRecitationValue = valueRecitation.value;
  const multiplyRecitation = Math.round(getRecitationValue * 0.15);
  totalRecitation.textContent = multiplyRecitation;

  const getAttendanceValue = valueAttendance.value;
  const multiplyAttendance = Math.round(getAttendanceValue * 0.05);
  totalAttendance.textContent = multiplyAttendance;

  const displayOver = multiplyProject + multiplyRecitation + multiplyAttendance;
});

//Quarterly Exam Button

btnExam.addEventListener("click", () => {
  const getExamValue = parseFloat(valueExam.value); // Parse exam value to float
  const multiplyExam = Math.round(getExamValue * 0.2); // Multiply exam value by 20%
  totalExam.textContent = multiplyExam + "%"; // Display the rounded exam score
});

let maxGrade = 100;
let sum = 6;
btnOverAllGrades.addEventListener("click", () => {
  const getQuizValue = valueQuiz.value;
  const multiplyQuiz = Math.round(getQuizValue * 0.1);
  totalQuiz.textContent = multiplyQuiz;

  const getLongQuizValue = valueLongQuiz.value;
  const multiplyLongQuiz = Math.round(getLongQuizValue * 0.15);
  totalLongQuiz.textContent = multiplyLongQuiz;
});
