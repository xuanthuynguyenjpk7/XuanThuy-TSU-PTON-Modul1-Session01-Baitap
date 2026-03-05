let choose;
let age;
let userName;
do {
    choose = +prompt("Mời nhập lựa chọn");
    switch (choose) {
        case 1:
            // console.log("Nhập tên");
            userName = prompt("Mời nhập tên")
            break;
        case 2:
            age = +prompt("Mời nhập tuổi")
            break
        case 3:
            console.log("Tên người dùng là: ", userName);
            console.log("Tuổi người dùng là: ", age);
            break
        case 4:
            let number = prompt("Mời nhập số bất kỳ");
            for (let i = 1; i <= 10; i++) {
                console.log(`${number} XX ${i}= ${number * i}`);
            }
            break
        case 5:
            let check_number = +prompt("Mời nhập số")
            break
        case 6:

            break
        case 7:

            break
        case 8:

            break
        case 9:
            break

        case 10:
            console.log("Thoát chương trình");
            break;

        default:
            break;
    }

} while (choose != 10);
