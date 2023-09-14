'use strict'

let userQuestion = confirm("Угадай число от 1 до 100");

function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function hiddenNumber(n) {
    const number = n;

    function startGame() {
        if (userQuestion === true) {
            let userAnswer = +prompt("Введи число");
            if (isNum(userAnswer) === true) {
                if (userAnswer > number) {
                    alert("Загаданное число меньше");
                    return startGame();
                } else if (userAnswer < number) {
                    alert("Загаданное число больше");
                    return startGame();
                } else if (userAnswer === number) {
                    alert("Ура ты победил!");
                }
            } else {
                alert("Введи число!")
                return startGame()
            }
        } else {
            return startGame()
        }
    }
    startGame()
}
hiddenNumber(10);