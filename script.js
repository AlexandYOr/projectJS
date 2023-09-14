'use strict'
// Запрос на продолжение игры
function confirmStep(t) {
    let confirmQuestion = confirm(t);
    return confirmQuestion;
}
// игра
function start () {
    const startQuestion = "угадайте число от 50 до 100"
    if (confirmStep(startQuestion) === true) {
        function startedGame () {
            let n = 0;

        }
    }
}

start()