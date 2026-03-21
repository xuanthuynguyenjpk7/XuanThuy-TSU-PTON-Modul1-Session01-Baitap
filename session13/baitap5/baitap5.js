// Bài toán yêu cầu khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên, thực hiện'
// Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
// Tính tổng các số chẵn và hiển thị ra màn hình alert()

let indexLength = Math.floor(Math.random() *11) + 10; //Tạo số lượng phần tử ngẫu nhiên từ 10 đến 20 phần tử
let arr = []; //tạo mảng rỗng

for (let i = 0; i < indexLength; i++) { //lặp qua từng phần tử sinh số nguyên ngẫu nhiên từ 0 đến 100 
    let randomNumber = Math.floor(Math.random() * 100);
    arr.push(randomNumber); //và thêm vào mảng
}
console.log("Mảng:",arr);
let sumOdd = 0;
let sumEven = 0;

for(let i = 0; i < arr.length; i++){
    let Number = arr[i];
    if(Number % 2 === 0) {
        sumEven += Number;
    } else {
        sumOdd += Number;
    }
}
alert("Tống số chẵn là:" + sumEven);
alert("Tống số lẻ là:" + sumOdd);