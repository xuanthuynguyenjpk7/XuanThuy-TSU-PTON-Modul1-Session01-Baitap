//Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử, 
// thực hiện nhập vào một số nguyên để kiểm tra (k), 
// thực hiện đếm số lần xuất hiện của k trong mảng. và hiển thị ra màn hình

let  arr = [1,2,4,5,6,3,6,8,3,2,3,78,34,23,45,24,23,45,42,3,1];
let num = Number(prompt("Nhập vào số bất kỳ"));
let count = arr.filter(i => i === num).length; //cách 1: dùng hàm filter để lọc ra các phần tử bằng num, rồi đếm xem có bao nhiêu phần tử
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
// if(num === arr[i]) {
//     count++;
// }
// }
alert(`số ${num} xuất hiện ${count} lần trong mảng `);

// Giải thích câu này:
// let count = arr.filter(i => i === num).length;

// 👉 Ý nghĩa: đếm xem trong mảng arr có bao nhiêu phần tử bằng num

// 🔍 Giải thích từng phần
// 1. arr.filter(...)
// filter() là hàm dùng để lọc mảng
// Nó sẽ tạo ra một mảng mới chứa các phần tử thỏa điều kiện
// 2. (i => i === num)
// Đây là hàm điều kiện
// i là từng phần tử trong mảng arr
// i === num nghĩa là:
// 👉 chỉ giữ lại những phần tử bằng num, sai thì bỏ đi
// 3. .length
// Sau khi lọc xong → ta có mảng mới
// .length sẽ lấy số lượng phần tử trong mảng đó