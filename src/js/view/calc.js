const calc = (inp) => {
    let op;
    if (inp.includes('+')) {
        op = inp.split("+");
        console.log(op);
        document.querySelector(".form-control").value = (parseFloat(op[0]) + parseFloat(op[1])).toFixed(2);
    } else if (inp.includes('×')) {
        op = inp.split("×");
        document.querySelector(".form-control").value = (parseFloat(op[0]) * parseFloat(op[1])).toFixed(2);
    } else if (inp.includes('-')) {
        op = inp.split("-");
        document.querySelector(".form-control").value = (parseFloat(op[0]) - parseFloat(op[1])).toFixed(2);
    } else if (inp.includes('÷')) {
        op = inp.split("÷");
        document.querySelector(".form-control").value = (parseFloat(op[0]) / parseFloat(op[1])).toFixed(2);
    }
}

export default calc;