// let runAgain = true;
// let counting = 0;
// while (runAgain) {
//   counting++
//   let user = prompt("enter snake, water or gun");
//   let computer = ["snake", "water", "gun"];
//   const arrayLength = computer.length;
//   const randomIndex = Math.floor(Math.random() * arrayLength);
//   const randomElement = computer[randomIndex];
//   console.log("user : " + user)
//   console.log("computer : " + randomElement)
//   console.log("Played : " + counting)
//   if (user == randomElement) {
//     console.log("nobody")
//   }
//   else if ((user == 'snake' && randomElement == 'water') || (user = 'gun' && randomElement == 'snake') || (user == 'water' && randomElement == 'gun')) {
//     console.log("You won this round")
//   } else {
//     console.log("You lost this round")
//   }
//   runAgain = confirm("play again...?")


// }
// ==================================================
// SNAKE WATER GUN GAME
let maxChances = 3;
let counting = 0;
let userWin = 0;
let computerWin = 0;
let output = document.getElementById("output");

function checktext() {

  document.getElementById("msg-div").style.display = "block";
  if (counting >= maxChances) return;

  let user = document.getElementById('uv').value.trim().toLowerCase();

  if (user === "") { alert("Please enter snake, water or gun"); return; }
  if (!["snake", "water", "gun"].includes(user)) {
    alert("Enter snake, water or gun");
    return;
  }

  counting++;

  let choices = ["snake", "water", "gun"];
  let computer = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (user === computer) {
    result = "Round draw";
  } else if (
    (user === "snake" && computer === "water") ||
    (user === "gun" && computer === "snake") ||
    (user === "water" && computer === "gun")
  ) {
    result = "You won this round";
    userWin++;
  } else {
    result = "Computer won this round";
    computerWin++;
  }

  // Append round result
  output.innerHTML += `
    <div style="padding: 1px; margin: 15px;"></div>
    <p><strong>Round ${counting}</strong></p>
    <span>User: ${user}</span>
    <span> | </span>
    <span>Computer: ${computer}</span>
    <p>${result}</p>
    <hr>
  `;

  // Final result
  if (counting === maxChances) {
    output.innerHTML += `
      <h3>Game Over</h3>
      <span>User wins : ${userWin}</span> 
      <span> | </span>
      <span>Computer wins : ${computerWin}</span>
      <p>
        ${userWin > computerWin ? "🎉 YOU WIN" :
        computerWin > userWin ? "🤖 COMPUTER WINS" :
          "🤝 DRAW"}
      </p>
      <div style="padding: 1px;"></div>
    `;
    endGame();
  }
}

function endGame() {
  document.getElementById("uv").disabled = true;
  document.getElementById("checkBtn").disabled = true;
  document.getElementById("playAgainBtn").style.display = "inline-block";
  document.getElementById("checkBtn").classList.add("no-hover");
}

function playAgain() {
  // Reset everything
  counting = 0;

  document.getElementById("uv").value = "";
  document.getElementById("uv").disabled = false;
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("playAgainBtn").style.display = "none";
  document.getElementById("msg-div").style.display = "none";
  document.getElementById("output").innerHTML = "";

}

// =================================================
