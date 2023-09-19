
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const correctHours = ['час', 'часа', 'часов'];
const correctMinutes = ['минута', 'минуты', 'минут'];
const correctSecond = ['секунда', 'секунды', 'секунд']
let today = new Date()
// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
let messageA = "";
function getCorrectDateA() {
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    for (let d = 0; d < week.length; d++) {
        if (d === today.getDay() - 1) {
            messageA = "Сегодня " + week[d]
        }
    }
    for (let m = 0; m < month.length; m++) {
        if (m === today.getMonth() - 1) {
            messageA += ", " + today.getDate() + " " + month[m] + " " + today.getFullYear() + " года, ";
        }
    }
    function correctDeclination(n, declination) {  
        n = Math.abs(n) % 100; 
        var n1 = n % 10;
        if (n > 10 && n < 20) { return n +  " " + declination[2]; }
        if (n1 > 1 && n1 < 5) { return n + " " + declination[1]; }
        if (n1 == 1) { return n + " " + declination[0]; }
        return n + " " +  declination[2];
    } 
    messageA += correctDeclination(hour, correctHours) + " " + correctDeclination(minute, correctMinutes) + " " + correctDeclination(second, correctSecond)
    document.getElementById('test').textContent = messageA;
}

setInterval(function() { 
    today = new Date()
    getCorrectDateA()
  }, 1000);



