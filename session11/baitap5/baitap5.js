let weight = Number(prompt("Nhập cân nặng (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));
let bmi = weight / (height * height);
bmi = bmi.toFixed(2);
let result = "";
if (bmi < 18.5) {
    result = "Cân nặng thấp (gầy)";
} else if (bmi < 25) {
    result = "Bình thường";
} else if (bmi < 30) {
    result = "Tiền báo phì";
} else if (bmi < 35) {
    result = "Béo phì độ I";
} else if (bmi <40) {
    result = "Béo phì độ II";
} else {
    result = "Béo phì độ III";
}
alert(
    "BMI của bạn là: " + bmi + "\n" + "Phân loại: " + result
);