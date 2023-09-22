// Изменение цвета квадрата.
const button = document.getElementById('btn');
let input = document.getElementById('text');
const colorChange = function () {
    document.querySelector("#square").style.backgroundColor = input.value
};
button.addEventListener('click', colorChange);








