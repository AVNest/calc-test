let input = document.querySelector('.input');

function insert(num) {
    input.textContent = 
    input.textContent + num;
}
function clean() {
    input.textContent = "";
}
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
}
function equal() {
    let exp = input.textContent;
    if(exp) {
        input.textContent = eval(exp).toFixed(8);
    }
}