function isEven(number){
    return number % 2 === 0;
}
let number =Number(prompt(`Nhập vào số cần kiểm tra: `));
let result = isEven(number);
console.log(`Kết quả là:${result}`);
