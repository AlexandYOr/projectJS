const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let today = new Date()
// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
let messageA = "";
function getCorrectDateA () {
    let hour;
    let minute;
    let second;
    for (let d = 0; d < week.length; d++) {
    if (d === today.getDay() - 1) {
        messageA = "Сегодня " + week[d]
    }
}
for (let m = 0; m < month.length; m++) {
    if (m === today.getMonth() - 1) {
        messageA += ", " + today.getDate() + " "  + month[m] + " " + today.getFullYear() + " года,";
    }
}

}
getCorrectDateA()
alert(messageA)