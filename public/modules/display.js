let pName = document.getElementById("character-name");
let pLevel = document.getElementById("character-level");
let pHealth = document.getElementById("health-bar");
let pScore = document.getElementById("score");
let phScore = document.getElementById("personal-highscore");

export function display(playerObj) {
  pName.innerText = "Name: " + playerObj.name;
  pLevel.innerText = "Lvl " + playerObj.level;
  pHealth.innerText = "Health: " + playerObj.health;
  pScore.innerText = "Current score: " + playerObj.score;
  phScore.innerText = "Personal highscore: " + playerObj.personalHighscore;
}
