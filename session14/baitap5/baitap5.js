// Viết một chương trình quản lý danh sách sinh viên với các chức năng cơ bản sau:

// 1. Thêm sinh viên mới
// - Nhập tên, tuổi, mã số sinh viên (ID).
// - Thêm sinh viên vào danh sách.
// 2. Hiển thị danh sách sinh viên
// - Duyệt qua danh sách và in thông tin của từng sinh viên ra màn hình.
 
// 3. Xóa sinh viên theo ID
// - Nhập ID của sinh viên cần xóa.
// - Nếu ID tồn tại, xóa sinh viên khỏi danh sách.
// - Nếu ID không tồn tại, thông báo lỗi.


 // 1️⃣ Tạo danh sách sinh viên (mảng đối tượng)
let studentList = [
    { name: "Nguyen Van A", age: 18, studentId: "12345" },
    { name: "Nguyen Thi B", age: 20, studentId: "23456" }
];

// 2️⃣ Thêm sinh viên mới
let newStudent = { name: "Tran Van C", age: 19, studentId: "34567" };
studentList.push(newStudent);

// 3️⃣ Hiển thị danh sách sinh viên
console.log("Danh sách sinh viên:");
for (let i = 0; i < studentList.length; i++) {
    console.log(
        `Tên: ${studentList[i].name}, Tuổi: ${studentList[i].age}, ID: ${studentList[i].studentId}`
    );
}

// 4️⃣ Xóa sinh viên theo ID
let idToRemove = "23456"; // giả sử muốn xóa ID này
let index = studentList.findIndex(s => s.studentId === idToRemove);
if (index !== -1) {
    studentList.splice(index, 1);
    console.log(`Đã xóa sinh viên có ID: ${idToRemove}`);
} else {
    console.log(`Không tìm thấy sinh viên có ID: ${idToRemove}`);
}

// 5️⃣ Hiển thị lại danh sách sau khi xóa
console.log("Danh sách sinh viên sau khi xóa:");
for (let i = 0; i < studentList.length; i++) {
    console.log(
        `Tên: ${studentList[i].name}, Tuổi: ${studentList[i].age}, ID: ${studentList[i].studentId}`
    );
}