// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có 
// chia hết cho b hay không và hiển thị ra thông báo bằng console hoặc alert

let a =+prompt("Mời nhập số a: ");
let b =+prompt("Mời nhập số b: ");

if (b === 0){
    alert("Không thể chia cho 0!");
} else if (a % b == 0){
    alert(`${a} chia hết cho ${b}`);
} else {
    alert(`${a} không chia hết cho ${b}`);
}

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10 
// và hiển thị ra thông báo bằng console hoặc alert.

let age = +prompt("Mời nhập tuổi");
if (age < 10){
    console.log("Học sinh không đủ điều kiện vào lớp 10!");
    
} else {
    console.log("Học sinh đủ điều kiện vào lớp 10!");
    
}

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình 
// để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

let inNumber = +prompt("Mời nhập số bất kỳ");
if (inNumber > 0){
    console.log("Số bạn nhập đang lớn hơn 0");
    
} else{
    console.log("Số bạn nhập đang nhỏ hơn 0");
}

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
let numbera = +prompt("Mời nhập số a: ");
let numberb = +prompt("Mời nhập số b: ");
let numberc = +prompt("Mời nhập số c: ");
let max = Math.max(numbera, numberb, numberc);
console.log("Số lớn nhất là:", max);

//