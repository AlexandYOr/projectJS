'use strict'
// Запрос на продолжение игры
function confirmStep(t) {
    confirm(t);
}
// игра
function start() {
    const startQuestion = "угадайте число от 50 до 100"
    if (confirmStep(startQuestion) === true) {
        const startedGame = function() {
            let hiddenNumber = 25;
            let userAnswer = +prompt("укажите ваш ответ");
            const checkUserAnswer = function() {
                if (userAnswer === hiddenNumber) {
                    alert("Ура вы победили!");
                } else if (userAnswer < hiddenNumber) {
                    startedGame()
                }
            }
        }
    }
}


start()
