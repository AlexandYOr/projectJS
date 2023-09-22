// Изменение цвета квадрата.
const buttonTop = document.querySelector('#btn');
let inputText = document.querySelector('#text');
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const colorChange = function () {
    square.style.backgroundColor = inputText.value
};
buttonTop.addEventListener('click', colorChange);

// Изменение свойства кнопки в кружке в квадрате
square.querySelector('#e_btn').style.display = "none";

//изменение свойст кружка
let inputRange = document.querySelector('#range');
const changeWH = function () {
    inputRange = document.querySelector('#range')
    circle.style.width = inputRange.value + "%"
    circle.style.height = inputRange.value + "%"
}
changeWH()
inputRange.addEventListener('input', changeWH)





