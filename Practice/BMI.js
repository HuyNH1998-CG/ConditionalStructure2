let weight = parseFloat(prompt("Input Weigth"));
let height = parseFloat(prompt('Input height in Meter'));
let bmi = weight / (height ^ 2);
if (bmi < 18) {
    document.write("underweight");
} else if (bmi < 25.0) {
    document.write("normal");
} else if (bmi < 30) {
    document.write("Overweight");
} else {
    document.write("Obese(fat)")
}
