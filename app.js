const handButton = ["batu", "kertas", "gunting"];

let gameInProgress = false;

// play game
document.querySelectorAll("img.hands").forEach((img) => {
  img.addEventListener("click", function () {
    if (!gameInProgress) {
      gameInProgress = true;
      const userChoice = this.getAttribute("id");
      console.log(userChoice);
      document.getElementById(userChoice).classList.add("pressed");

      const computerChoice = handButton[Math.floor(Math.random() * 3)];
      console.log(computerChoice);
      document.getElementById(computerChoice + "comp").classList.add("pressed");

      determineWinner(userChoice, computerChoice);
    }
  });
});

// menentukan pemenang
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    document.querySelector("h1").innerHTML = "DRAW";
    document.querySelector("h1").classList.add("draw");
  } else if (
    (userChoice === "batu" && computerChoice === "gunting") ||
    (userChoice === "kertas" && computerChoice === "batu") ||
    (userChoice === "gunting" && computerChoice === "kertas")
  ) {
    console.log("You win!");
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector("h1").classList.add("player1win");
  } else {
    console.log("Computer wins!");
    document.querySelector("h1").innerHTML = "COM Wins";
    document.querySelector("h1").classList.add("comwin");
  }
}

// reset function
document.getElementById("reset").addEventListener("click", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.remove("pressed");
  });
  gameInProgress = false;
  document.querySelector("h1").innerHTML = "VS";
  document.querySelector("h1").classList.remove("draw", "player1win", "comwin");
});

/* ------------------------------ Batu Gunting Kertas Menggunakan Class Dan Method Get And Set ------------------------------ */
// class BGK {
//   constructor() {
//     this._handButton = ["batu", "kertas", "gunting"];
//     this._gameInProgress = false;
//   }

//   get handButton() {
//     return this._handButton;
//   }

//   set handButton(value) {
//     this._handButton = value;
//   }

//   get gameInProgress() {
//     return this._gameInProgress;
//   }

//   set gameInProgress(value) {
//     this._gameInProgress = value;
//   }

//   // function play
//   play(userChoice) {
//     if (!this._gameInProgress) {
//       this._gameInProgress = true;
//       this._userChoice = userChoice;
//       console.log(this._userChoice);
//       document.getElementById(this._userChoice).classList.add("pressed");

//       this._computerChoice = this._handButton[Math.floor(Math.random() * 3)];
//       console.log(this._computerChoice);
//       document
//         .getElementById(this._computerChoice + "comp")
//         .classList.add("pressed");

//       this.determineWinner();
//     }
//   }

//   // function menentukan pemenang
//   determineWinner() {
//     if (this._userChoice === this._computerChoice) {
//       console.log("It's a tie!");
//       document.querySelector("h1").innerHTML = "DRAW";
//       document.querySelector("h1").classList.add("draw");
//     } else if (
//       (this._userChoice === "batu" && this._computerChoice === "gunting") ||
//       (this._userChoice === "kertas" && this._computerChoice === "batu") ||
//       (this._userChoice === "gunting" && this._computerChoice === "kertas")
//     ) {
//       console.log("You win!");
//       document.querySelector("h1").innerHTML = "Player 1 Wins";
//       document.querySelector("h1").classList.add("player1win");
//     } else {
//       console.log("Computer wins!");
//       document.querySelector("h1").innerHTML = "COM Wins";
//       document.querySelector("h1").classList.add("comwin");
//     }
//   }

//   // function reset
//   reset() {
//     document.querySelectorAll("img").forEach((img) => {
//       img.classList.remove("pressed");
//     });
//     this._gameInProgress = false;
//     document.querySelector("h1").innerHTML = "VS";
//     document
//       .querySelector("h1")
//       .classList.remove("draw", "player1win", "comwin");
//   }
// }

// // Instantiate the BGK class
// const game = new BGK();

// // Add event listeners for the hand buttons
// document.querySelectorAll("img.hands").forEach((img) => {
//   img.addEventListener("click", function () {
//     game.play(this.getAttribute("id"));
//   });
// });

// // Add event listener for the reset button
// document.getElementById("reset").addEventListener("click", function () {
//   game.reset();
// });
