// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, 
// hiển thị hộp thoại thông báo là đã hoàn thành.
// Dùng vòng lặp for : Duyệt mảng
// Đếm số (1 → 100)
// Biết số lần lặp 
//  cú pháp:  for (khởi tạo; điều kiện; tăng giảm)
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành!!!");
        break;
    }
}
// DÙng vòng lặp while (điều kiện) 
// Không biết trước số lần lặp; Lặp đến khi đạt điều kiện
let i = 1;
while (i <= 100) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành!!");
        break;
    }
    i++;
}


// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
// Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
// Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

let input = prompt("Mời nhập nhiệt độ");

if (input === null || input.trim() === "") { 
    // input === null nghĩa là bấm Cancel, bỏ qua ko nhập gì
    // input.trim() === "" nghĩa là nhập rỗng hoặc khoảng trắng
    alert("Bạn đang bỏ trống, xin hãy nhập số hợp lệ");
} else {
    let temp = Number(input);
    if (isNaN(temp)) { // Nhập sai, ko phải số number
        alert("Xin hãy nhập số hợp lệ");
    } else if (temp > 100) {
        alert("Nhiệt độ quá cao, xin giảm xuống!!");
    } else if (temp < 20) {
        alert("Nhiệt độ hơi thấp, xin hãy tăng lên!!");
    } else {
        alert("Nhiệt độ bình thường!!");
    }
}

console.log(temp);



// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”