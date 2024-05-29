const againBtn = document.querySelector('#again-btn')
const resultBtn = document.querySelector('#rusult')
const form = document.querySelector('form')
const statusgame = document.querySelector('#status-game')
const attemps = document.querySelector('#attemps')
const record = document.querySelector('#record')

let attempsCounter = 15;
let recordCounter = 0;

let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const guessNumber = +form['guess-number'].value;

    if(randomNumber === guessNumber){
        // resultBtn.textContent = guessNumber;
        statusgame.textContent ="You are Winner"
        form['guess-number'].disabled = true;

        if(attempsCounter > recordCounter) {
            recordCounter = attempsCounter;
            record.textContent = recordCounter;
        }
    } else {
        if(randomNumber > guessNumber) {
            statusgame.textContent = "too low";
        } else {
            statusgame.textContent = "too hight";
        }

        attempsCounter--;
        attemps.textContent = attempsCounter;
    }
})

againBtn.addEventListener('click', () => {
    attempsCounter = 15;
    // resultBtn.textContent = "?";
    randomNumber = Math.floor(Math.random() * 20) + 1;
    form['guess-number'].disabled = false;
    statusgame.textContent = "Start"
})