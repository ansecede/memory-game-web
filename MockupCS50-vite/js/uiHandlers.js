const score = document.getElementById("score");

export function addPointScore() {
  let currentScore = parseInt(score.innerText);
  currentScore++;
  score.innerText = currentScore;
  return;
}
