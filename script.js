
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const correctHours = ['час', 'часа', 'часов'];
const correctMinutes = ['минута', 'минуты', 'минут'];
const correctSecond = ['секунда', 'секунды', 'секунд']
let today;
let year;
let numberMonth;
let date;
let hour;
let minute;
let second;
let messageA = "";
let messageB = "";
function now() {
    today = new Date()
    year = today.getFullYear();
    numberMonth = today.getMonth();
    date = today.getDate();
    day = today.getDay() - 1;
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
}
now();
// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
function dateA() {
    for (let d = 0; d < week.length; d++) {
        if (d === day) {
            messageA = "Сегодня " + week[d]
        }
    }
    for (let m = 0; m < month.length; m++) {
        if (m === numberMonth) {
            messageA += ", " + date + " " + month[m] + " " + year + " года, ";
        }
    }
    function correctDeclination(n, declination) {
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) {
            return n + " " + declination[2];
        };
        if (n1 > 1 && n1 < 5) {
            return n + " " + declination[1];
        };
        if (n1 == 1) {
            return n + " " + declination[0];
        };
        return n + " " + declination[2];
    }
    messageA += correctDeclination(hour, correctHours) + " " + correctDeclination(minute, correctMinutes) + " " + correctDeclination(second, correctSecond);
    document.getElementById('dateA').textContent = messageA;
}
// '04.02.2020 - 21:05:33'
function dateB() {
    let todayB = [date, numberMonth + 1, year, hour, minute, second]
    for (i = 0; i < todayB.length; i++) {
        if (todayB[i] < 10) {
            todayB[i] = "0" + todayB[i];
        };
    };
    messageB = todayB[3] + ':' + todayB[4] + ':' + todayB[5] + ' ' + todayB[0] + '.' + todayB[1] + '.' + todayB[2];
    document.getElementById('dateB').textContent = messageB;
}


setInterval(function () {
    now()
    dateA()
    dateB()
}, 1000);



