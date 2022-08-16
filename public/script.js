import handleLogin from "./modules/handleLogin.js";
import { display } from "./modules/display.js";
import { HealthBar } from "./modules/HealthBar";

let loginInput = document.getElementById("username");
let inputScreen = document.querySelector(".input-screen");

let loginData = "";
loginInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    event.preventDefault();
    if (loginInput.value) {
      loginData = loginInput.value;
      console.log(loginData);
      let currentPlayer = login(loginData);
      console.log(currentPlayer);
      currentPlayer.then((pObj) => {
        display(pObj);
        inputScreen.classList.toggle("slide-away");
        setTimeout(toggleLoginScreen, 2000);
        inputScreen.classList.toggle("slide-away");
        setTimeout(logout, 4000, pObj);
      });
      loginInput.value = "";
    } else {
      alert("Please write something!");
    }
  }
});

//^ Helper functions

async function login(value) {
  let currentPlayer = await handleLogin(value);
  return currentPlayer;
}

async function logout(pObj) {
  if (pObj.health > 0) {
    console.log("Sending player back to server...");
    const options = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pObj),
    };
    fetch(`/players/${pObj.name}`, options)
      .then((res) => {
        console.log(res);
        toggleLoginScreen();
      })
      .catch((err) => console.log(err));
  } else {
    alert("Sorry, the character is dead.");
    toggleLoginScreen();
    return;
  }
}

//^ Helper UI functions

// hideLoginScreen();
function toggleLoginScreen() {
  if (!inputScreen.classList.contains("hidden")) {
    console.log("timeout is on");
  } else {
    console.log("screen is back");
  }
  inputScreen.classList.toggle("hidden");
}
