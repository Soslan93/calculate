import 'bootstrap';
import "../scss/custom.scss";
import { changeColor } from "./view/color.js";
import { getInput, resInput, getCalc } from "./view/getInput.js";

document.querySelector(".change-color").addEventListener("click", e => {
    const colorClass = e.target.className;
    const color = window.getComputedStyle(e.target).backgroundColor;
    changeColor(color);
});
// вычисляем результат (можно вычислить результат по нажатию кнопки Enter или нажать на кнопку "=")
document.addEventListener('keypress', getCalc);
document.querySelector('.numeric-keypad__item--equal').addEventListener('click', getCalc);
document.querySelector('.numeric-keypad__item--multiply').addEventListener('click', getCalc);
document.querySelector('.numeric-keypad__item--minus').addEventListener('click', getCalc);
document.querySelector('.numeric-keypad__item--division').addEventListener('click', getCalc);
document.querySelector('.numeric-keypad__item--plus').addEventListener('click', getCalc);
// получаем то что ввели на экране
document.querySelector(".numeric-keypad").addEventListener('click', getInput);
// сброс значения
document.querySelector(".reset").addEventListener('click', resInput);
