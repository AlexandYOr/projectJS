const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date()
let verticalWeek = "";
for (let i = 0; i < week.length; i++) {
    if (i === day.getDay() - 1) {
        verticalWeek += week[i] + "\n";
        document.write(`<p><b>${week[i]}</b></p>`);
    } else if (i <= 4) {
        verticalWeek += week[i] + "\n";
        document.write(`<p>${week[i]}</p>`);
    } else if (i > 4) {
        verticalWeek += week[i] + "\n";
        document.write(`<p><i>${week[i]}</i></p>`);
    }
}

alert(verticalWeek)