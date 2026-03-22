// Tạo một đối tượng tên là person có các thuộc tính sau:

// name: "John Doe"
// age: 25
// job: "Developer"
// Sau đó, sử dụng console  để in ra:

// Giá trị của thuộc tính name.
// Tất cả các thông tin của đối tượng.

let person = {
    name: "John Doe",
    age: 25,
    job: "Developer",
};
for(let key in person) {
    console.log(`${key}: ${person[key]}`);   
}
