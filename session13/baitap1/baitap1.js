// Thực hiện tạo mảng và sử dụng các phương thức thêm phần tử vào 
// mảng các phần tử ngẫu nhiên làm sao cho mảng đủ 10 phần tử, 
// sau đó hiển thị mảng ra màn hình

let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}


console.log("Mảng ngẫu nhiên là:", numbers.join(", ")); 
//join: nối mảng, ", " là dấu phân cách giữa các phần tử

// giải thích:  
// Math.random()
// Tạo ra số ngẫu nhiên từ 0 đến nhỏ hơn 1
// 👉 Ví dụ: 0.123, 0.987, 0.456

// Math.random() * 100
// Nhân lên để được số từ 0 đến < 100
// Nếu muốn số từ 0 đến 100 thì code là (Math.floor(Math.random() * 100 + 1))
// 👉 Ví dụ: 45.67, 99.12, 3.5

// Math.floor(...)

// Làm tròn xuống thành số nguyên
// 👉 Ví dụ:
// 45.67 → 45
// 99.12 → 99

// 📌 Sau bước này có số nguyên từ 0 → 99