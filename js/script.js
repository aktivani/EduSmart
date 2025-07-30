document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById('result');
  if (!answer) {
    result.textContent = "Please select an answer.";
  } else if (answer.value === "b") {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Incorrect. Try again!";
  }
});