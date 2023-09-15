'use strict'



function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function hiddenNumber() {
    let userQuestion = confirm("Угадай число от 1 до 100");
    let number = parseInt(Math.random() * 100)
    if (number === 0) {
        number = parseInt(Math.random() * 100)
    }
    let attempt = 10;

    function startGame() {
        if (userQuestion === true) {
            if (attempt === 0) {
                let tryAgainQuestion = confirm("Попытки закончились. Хотите сыграть еще раз?");
                if (tryAgainQuestion === true) {
                    return hiddenNumber()
                } else {
                    return alert("До свидания!")
                }
            }
            let userAnswer = +prompt("Введи число");
            if (isNum(userAnswer) === true) {

                if (userAnswer > number) {
                    attempt--
                    alert("Загаданное число меньше осталось попыток " + attempt);
                    return startGame();
                } else if (userAnswer < number) {
                    attempt--
                    alert("Загаданное число больше осталось попыток " + attempt);
                    return startGame();
                } else if (userAnswer === number) {
                    let finalUserAnswer = confirm("Ура ты победил! Хочешь ли сыграть еще раз?");
                    if (finalUserAnswer === true) {
                        return hiddenNumber() 
                    } else {
                        return alert("До свидания!");
                    }
                    return
                }
            } else {
                alert("Введи число!")
                return startGame()
            }
        } else {
            return alert("До свидания!")
        }
    }
    startGame()
}
hiddenNumber()