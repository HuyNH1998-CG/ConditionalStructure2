function input(val) {
    document.getElementById("display").value += val;
}
function equal() {
    document.getElementById("display").value = eval(display.value);
}
function clr() {
    document.getElementById('display').value = '';
}