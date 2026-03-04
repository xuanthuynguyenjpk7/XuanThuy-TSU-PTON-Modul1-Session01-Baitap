let student = {
    id: 1,
    name: "Nguyen Van A",
    gender: "Nam",
    age: 20,
    mark: 8,

};

let newStudent = {
    id: 2,
    name: "Nguyen Thi B",
    gender: "Nu",
    age: 18,
    mark: 9.5,
    
};

let students = [];
students.push(student, newStudent);
console.log("students", students);

// Truy xuất các thuộc tính của đối tượng newStudent
for (let key in newStudent) {
   console.log(key, newStudent[key]);

};

