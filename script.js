
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const correctHours = ['час', 'часа', 'часов'];
const correctMinutes = ['минута', 'минуты', 'минут'];
const correctSecond = ['секунда', 'секунды', 'секунд']
function now() {
    let today = new Date()
    let year = today.getFullYear();
    let numberMonth = today.getMonth();
    let date = today.getDate();
    let day = today.getDay() - 1;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    function dateA() {
        let message = ""
        for (let d = 0; d < week.length; d++) {
            if (d === day) {
                message = "Сегодня " + week[d]
            }
        }
        for (let m = 0; m < month.length; m++) {
            if (m === numberMonth) {
                message += ", " + date + " " + month[m] + " " + year + " года, ";
            }
        }
        function correctDeclination(n, declination) {
            n = Math.abs(n) % 100;
            let n1 = n % 10;
            if (n > 10 && n < 20) {
                return n + " " + declination[2];
            };
            if (n > 1 && n < 5) {
                return n + " " + declination[1];
            };
            if (n == 1) {
                return n + " " + declination[0];
            };
            return n + " " + declination[2];
        }
        message += correctDeclination(hour, correctHours) + " " + correctDeclination(minute, correctMinutes) + " " + correctDeclination(second, correctSecond);
        document.getElementById('dateA').textContent = message;
    }
    function dateB() {
        let message = ""
        let todayB = [date, numberMonth + 1, year, hour, minute, second]
        for (i = 0; i < todayB.length; i++) {
            if (todayB[i] < 10) {
                todayB[i] = "0" + todayB[i];
            };
        };
        message = todayB[3] + ':' + todayB[4] + ':' + todayB[5] + ' ' + todayB[0] + '.' + todayB[1] + '.' + todayB[2];
        document.getElementById('dateB').textContent = message;
    }
    dateA();
    dateB();
}
now();

setInterval(function () {
    now()
}, 1000);



