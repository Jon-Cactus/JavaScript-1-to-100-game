const guessBtn = document.getElementById("guess-btn")
const newGameBtn = document.getElementById("new-game-btn")
const guessesEl = document.getElementById("guesses-el")
const checkEl = document.getElementById("check-el")
const hintEl = document.getElementById("hint-el")
const guessNumber = document.getElementById("guess-number")
let correctNumber = Math.floor(Math.random() * 100) + 1;
console.log(correctNumber)
let round = 0

//Current issues://
//When starting a new game, the correctNumber remains the same despite trying to reset it with the newGameBtn's function//

guessBtn.addEventListener("click", function() {
    if (Number(guessNumber.value) == correctNumber) {
        guessesEl.textContent += guessNumber.value + ", ";
        checkEl.removeAttribute("hidden");
        checkEl.style.backgroundColor = "green";
        checkEl.textContent = "Congratulations! You got it right!";
        guessBtn.setAttribute("disabled", "");
        newGameBtn.removeAttribute("hidden");
    } else if (Number(guessNumber.value) > correctNumber) {
        guessesEl.textContent += guessNumber.value + ", ";
        checkEl.removeAttribute("hidden");
        checkEl.textContent = "Wrong!";
        hintEl.removeAttribute("hidden");
        hintEl.textContent = "Last guess was too high!";
        round++; {
            if (round === 10) {
                checkEl.textContent = "!!!GAME OVER!!!";
                newGameBtn.removeAttribute("hidden");
                guessBtn.setAttribute("disabled", "");
            }
        }
    } else if (Number(guessNumber.value) < correctNumber) {
        guessesEl.textContent += guessNumber.value + ", ";
        checkEl.removeAttribute("hidden");
        checkEl.textContent = "Wrong!";
        hintEl.removeAttribute("hidden");
        hintEl.textContent = "Last guess was too low!";
        round++; {
            if (round === 10) {
                checkEl.textContent = "!!!GAME OVER!!!";
                newGameBtn.removeAttribute("hidden");
                guessBtn.setAttribute("disabled", "");
            }
        }
    }
})

newGameBtn.addEventListener("click", function() {
    guessNumber.value = "null"
    round = 0;
    guessesEl.textContent = "";
    checkEl.textContent = "";
    hintEl.textContent = "";
    guessesEl.setAttribute("hidden", "");
    checkEl.setAttribute("hidden", "")
    hintEl.setAttribute("hidden", "");
    newGameBtn.setAttribute("hidden", "");
    guessBtn.removeAttribute("disabled")
    //Resetting the correctNumber doesn't seem to work this way//
    let correctNumber = Math.floor(Math.random() * 100) + 1;
})