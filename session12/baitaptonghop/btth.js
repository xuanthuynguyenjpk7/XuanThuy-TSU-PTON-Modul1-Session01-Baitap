// 1. Mục tiêu
// - Tạo một menu đơn giản cho phép người dùng chọn các tính năng khác nhau bằng cách 
// nhập lựa chọn từ bàn phím.

// - Chương trình sẽ thực hiện các hành động khác nhau dựa trên sự lựa chọn của người dùng 
// và tiếp tục hiển thị menu cho đến khi người dùng chọn thoát.

// 2. Mô tả
// Lựa chọn 1: Nhập tên của người dùng.
// Lựa chọn 2: Nhập tuổi của người dùng.
// Lựa chọn 3: In tên và tuổi của người dùng.
// Lựa chọn 4: In bảng cửu chương của một số.
// Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
// Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
// Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
// Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
// Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
// Lựa chọn 10: Thoát khỏi chương trình.

// Khởi tạo biến lưu tên và tuổi
let nameUser = "";
let ageUser = 0;

// ==== Các hàm chức năng ====

function nhapTen() {
    nameUser = prompt("Nhập tên của bạn:");
    alert("Tên đã lưu: " + nameUser);
}

function nhapTuoi() {
    ageUser = Number(prompt("Nhập tuổi của bạn:"));
    alert("Tuổi đã lưu: " + ageUser);
}

function hienThiTenTuoi() {
    alert("Tên: " + nameUser + "\nTuổi: " + ageUser);  // \n → xuống dòng trong chuỗi hiển thị.
}

function bangCuuChuong() {
    let num = Number(prompt("Nhập số để in bảng cửu chương:"));
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${num} x ${i} = ${num*i}\n`;
    }
    alert(res);
}

function kiemTraChanLe() {
    let n = Number(prompt("Nhập số để kiểm tra chẵn/lẻ:"));
    alert(n % 2 === 0 ? n + " là số chẵn" : n + " là số lẻ");
}

function tinhTongDenN() {
    let N = Number(prompt("Nhập số N:"));
    let sum = 0;
    for (let i = 1; i <= N; i++) sum += i;
    alert("Tổng từ 1 đến " + N + " là: " + sum);
}

function inDaySo() {
    let seq = prompt("Nhập các số cách nhau dấu phẩy:");
    alert("Dãy số bạn nhập: " + seq);
}

function kiemTraSoNguyenTo() {
    let num = Number(prompt("Nhập số để kiểm tra nguyên tố:"));
    if (num < 2) alert(num + " không phải số nguyên tố");
    else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) { isPrime = false; break; }
        alert(num + (isPrime ? " là số nguyên tố" : " không phải số nguyên tố"));
    }
}

function daoNguocChuoi() {
    let str = prompt("Nhập chuỗi để đảo ngược:");
    alert("Chuỗi đảo ngược: " + str.split("").reverse().join(""));
}

// ==== Vòng lặp menu trực quan ====

while (true) {
    let choice = prompt(
        "Menu trực quan:\n" +
        "1: Nhập tên\n" +
        "2: Nhập tuổi\n" +
        "3: Hiển thị tên và tuổi\n" +
        "4: Bảng cửu chương\n" +
        "5: Kiểm tra số chẵn/lẻ\n" +
        "6: Tính tổng từ 1 đến N\n" +
        "7: In dãy số\n" +
        "8: Kiểm tra số nguyên tố\n" +
        "9: Đảo ngược chuỗi\n" +
        "10: Thoát"
    );

    if (!choice) break; // Cancel hoặc bỏ trống → thoát

    choice = Number(choice);

    switch (choice) {
        case 1: nhapTen(); break;
        case 2: nhapTuoi(); break;
        case 3: hienThiTenTuoi(); break;
        case 4: bangCuuChuong(); break;
        case 5: kiemTraChanLe(); break;
        case 6: tinhTongDenN(); break;
        case 7: inDaySo(); break;
        case 8: kiemTraSoNguyenTo(); break;
        case 9: daoNguocChuoi(); break;
        case 10: alert("Thoát chương trình!"); break;
        default: alert("Vui lòng chọn từ 1 đến 10"); break;
    }

    if (choice === 10) break; // Thoát vòng lặp nếu chọn 10
}





// let choose;
// let age;
// let userName;
// do {
//     choose = +prompt("Mời nhập lựa chọn");
//     switch (choose) {
//         case 1:
//             // console.log("Nhập tên");
//             userName = prompt("Mời nhập tên")
//             break;
//         case 2:
//             age = +prompt("Mời nhập tuổi")
//             break
//         case 3:
//             console.log("Tên người dùng là: ", userName);
//             console.log("Tuổi người dùng là: ", age);
//             break
//         case 4:
//             let number = prompt("Mời nhập số bất kỳ");
//             for (let i = 1; i <= 10; i++) {
//                 console.log(`${number} XX ${i}= ${number * i}`);
//             }
//             break
//         case 5:
//             let check_number = +prompt("Mời nhập số")
//             break
//         case 6:

//             break
//         case 7:

//             break
//         case 8:

//             break
//         case 9:
//             break

//         case 10:
//             console.log("Thoát chương trình");
//             break;

//         default:
//             break;
//     }

// } while (choose != 10);
