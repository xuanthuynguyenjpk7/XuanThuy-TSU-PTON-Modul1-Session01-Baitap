//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất 
// trong mảng và thực hiện in ra màn hình bằng alert()


//cách 1: truyền thống dùng vòng lặp for
let numbers = prompt("Nhập vào dãy số bất kỳ")
.split("") // tách chuỗi thành mảng
.map(item => Number(item.trim()));// chuyển sang số, loại bỏ khoảng trắng
let max = Number(numbers[0]); // lấy phần tử vị trí số 0 đầu tiền của mảng là số lớn nhất (max)
for (let i = 1; i < numbers.length; i++) { 
    // bắt đầu từ phần tử thứ 2 (i=1)
// (vì phần tử thứ nhất đã gán cho max)
// duyệt qua từng phần tử so sánh với max phía trên 
    if (Number(numbers[i] > max)) {  // nếu phần tử vị trí thứ i lớn hơn max
        max = Number(numbers[i]);  // thì phần tử đó chính là max(số lớn nhất), cập nhật lại giá trị mới cho max
    }
}
alert(`Giá trị lớn nhất là: ${max}`);


// cách 2: dùng Math.max
// let max = Math.max(prompt("Nhập dãy số bất kỳ")
// .split(" ")
// .map(item => Number(item.trim())));

// alert(`Số lớn nhất là: ${max}`);

// cách 3: ngắn gọn
// alert(`Số lớn nhất là: ${Math.max(...(input => input.includes(",") ? input.split(",").map(n=>Number(n.trim())) : input.split("").map(Number))(prompt("Nhập dãy số bất kỳ")))}`);