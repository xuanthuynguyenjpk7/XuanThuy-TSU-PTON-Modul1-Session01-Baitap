// Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành đảo ngược các phần tử trong mảng

// cách 1:
// let numbers = prompt("Nhập dãy số bất kỳ");
// let newNumbers = numbers.split("");
// let numbersReverse = newNumbers.reverse();
// console.log("Dãy số mới là:", newNumbers);
// alert("Dãy số đảo ngược là:" + numbersReverse.join(""));

// cách 2:
alert("Dãy số mới là:" + prompt("Nhập dãy số bất kỳ:").split("").reverse().join(""));