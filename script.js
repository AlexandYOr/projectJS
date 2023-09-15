const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date()
let verticalWeek = "";
for (let i = 0; i < week.length; i++) {
    if (i === day.getDay() - 1) {
        verticalWeek += week[i] + "\n"
    } else if (i <= 4) {
        verticalWeek += week[i] + "\n"
    } else if (i > 4) {
        verticalWeek += week[i] + "\n"
    }
}
alert(verticalWeek)