function checkAnswers() {
  const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "c",
    q6: "b",
    q7: "b",
    q8: "c",
    q9: "b",
    q10: "c"
  };

  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === correctAnswers[`q${i}`]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>You scored ${score} out of 10</h2>`;
  resultDiv.style.marginTop = "20px";
}
