import calc from "./calc.js";
// вычисления калькулятора
export const getCalc = (e) => {
    if (event.keyCode === 13 || event.which === 13 || event.target.value === "equal" || event.target.value === "+" 
    || event.target.value === "-" || event.target.value === "×" || event.target.value === "÷" /*так наверно делать не стоит, но вроде работает*/) {
        const inp = document.querySelector('.form-control').value;
        // document.querySelector(".form-control").value = eval(inp); - самый простой способ
        // const operands = inp.split(/[+*-/]/); - (хотел тут разбить на массив. например "55+55" он разобьет на [55, 55], 
        // но он разбивает "55.6+66.3" на массив [55, 6, 66, 3] и получается потом 55+6=61, не пойму как регулярное выражение
        // правильно написать, пришлось пока в функции calc дублировать inp.spli())
        calc(inp);
    };
}
//получаем то что вводим (если жмем кнопки цифровой клаватуры на экране)
export const getInput = (e) => {
    if (e.target.value !== "equal") {
        document.querySelector(".form-control").value = document.querySelector(".form-control").value + e.target.value;
    }
};
// сброс значения
export const resInput = () => {
    document.querySelector(".form-control").value = " ";
};
