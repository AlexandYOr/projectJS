const lang = confirm("Ваш язык русский?") ? "ru" : "en";
// if (lang === "ru") {
//     console.log("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье");
// } else {
//     console.log("Monday", "Tuesday", "Wednesday", "Thurdsday", "Friday", "Saturday", "Sunday");
// };
// switch (lang) {
//     case "ru":
//         console.log("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье");
//         break;
//     case "en":
//         console.log("Monday", "Tuesday", "Wednesday", "Thurdsday", "Friday", "Saturday", "Sunday");
//         break;
//     default:
//         alert("Нет доступных значений");
//         break;
// }

const langCodes = {
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thurdsday", "Friday", "Saturday", "Sunday"]
};
console.log(langCodes[lang].join());

let namePerson = prompt("Ваше имя?") 
namePerson === "Артем" || namePerson === "Артём" ? "Директор" : namePerson === "Александр" ? "преподователь" : "студент"
console.log(namePerson);
