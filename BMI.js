let weight = +prompt("Input Weigth");
let height = +prompt('Input height');
let bmi = weight / (height ^ 2);
if (bmi < 18) {
    document.write("underweight");
} else if (bmi <25.0) {
    document.write("normal");
} else if (bmi < 30) {
    document.write("Overweight");
} else {
    document.write("Obese(fat)")
}
