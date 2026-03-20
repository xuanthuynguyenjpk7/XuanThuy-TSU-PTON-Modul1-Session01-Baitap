// Tạo mảng có sẵn với các phần tử số. Cho người dùng nhập vào một số bất kỳ, 
// sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẵn thì alert(“Chúc bạn may mắn lần sau”)


// cách 1: dùng vòng lặp for truyền thống lặp qua từng phần từ và tìm
// let array = [2, 5, 67, 23, 45, 78, 23, 41, 7]
// let search = Number(prompt("Nhập vào số cần tìm"));
// let hasNumber = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === search) {
//         hasNumber = true;
//     }
// } if (hasNumber) {
//     alert("Bingo");
// } else {
//     alert("Chúc bạn may mắn lần sau!");
// }
// cách 2: dùng hàm Includes: 
let arr = [12, 56, 3, 45, 78, 23, 56, 4, 1];
let number = Number(prompt("Nhập vào số bất kỳ"));

if (arr.includes(number)) {  // Kiểm tra xem giá trị number có tồn tại trong mảng arr hay không
    alert("Bingo");  // Nếu có trong mảng → trả về true
                     // Nếu không có → trả về false
} else {
    alert("Chúc bạn may mắn lần sau!");
}






