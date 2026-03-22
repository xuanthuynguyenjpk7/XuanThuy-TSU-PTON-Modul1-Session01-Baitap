// Tạo một đối tượng car với các thuộc tính sau:

// brand: "Toyota"
// model: "Corolla"
// year: 2020
// Yêu cầu:

// Thêm một thuộc tính mới là color với giá trị "red"
// Cập nhật giá trị của thuộc tính year thành 2022
// In ra đối tượng sau khi cập nhật

let carInfor = {
    brand : "Toyota",
    model : "Corolla",
    year : 2020,
}

carInfor.color = "red"  // Thêm thuộc tính color với giá trị "red"
carInfor.year = 2022  // Cập nhật giá trị của thuộc tính year thành 2022
for (let key in carInfor) {
    console.log(`${key}: ${carInfor[key]}`);
    
}
