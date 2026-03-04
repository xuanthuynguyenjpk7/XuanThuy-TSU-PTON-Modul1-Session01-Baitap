let student={
    id:1,
    name: "Nguyen Van A",
    gender:"nam",
    age: 20,
    mark: 8,
};
// cách 1: dùng for in: duyệt và truy xuất tất cả các thuộc tính
//for (let key in student) {
 //   console.log(key, student[key]);
// }
    
// cách 2: dùng object.entries() đầy đủ nhất: Lấy cả key và value dưới dạng mảng cặp
Object.entries(student).forEach(([key, Value]) => {
    console.log(key, Value);
    })

