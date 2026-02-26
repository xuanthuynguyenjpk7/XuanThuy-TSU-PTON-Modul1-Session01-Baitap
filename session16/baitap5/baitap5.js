function isPalindrome(string) {
    if (!string) return false; // xử lý null hoặc chuỗi rỗng
    string = string.toLowerCase();
    let reversed = string.split("").reverse().join("");
    return string === reversed;
}
let inputString = prompt("Nhập vào một chuỗi: ");
if (!inputString) { 
// !inputstring:  nghĩa là các giá trị sau đều được xem là false khi kiểm tra điều kiện: false
// 0
// ""
// null
// undefined
// NaN
    alert("Bạn chưa nhập dữ liệu");
} else {
    alert(
    isPalindrome(inputString)
    ? "Đây là chuỗi đối xứng (palindrome)"
    : "Đây không phải là chuỗi đối xứng (non-palindrome)"
    );
}
