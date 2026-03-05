// Bài 1: Chuyển từ độ C sang độ F.
let c = +prompt("Nhập nhiệt độ độ C:");

if (isNaN(c)) {
    console.log("Vui lòng nhập số hợp lệ!");
} else {
    let f = c * 9 / 5 + 32;
    console.log(`${c}°C = ${f}°F`);
}
// Bài 2: Chuyển từ mét sang feet
let meter = +prompt("Nhập số mét:");

let feet = meter * 3.28084;

console.log("Giá trị sau khi đổi sang feet là:", feet);
// Bài 3: Tính diện tích hình vuông khi biết cạnh a.

// Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
// Bài 6: Giải phương trình bậc 1.
// Bài 7: Giải phương trình bậc 2.
// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
//        Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.