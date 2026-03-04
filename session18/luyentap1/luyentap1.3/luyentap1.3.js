let student1 = {
    id: 1,
    name: "Nguyen Van A",
    gender: "Nam",
    age: 20,
    mark: 9,

};

let student2 = {
    id: 2,
    name: "Nguyen Van B",
    gender: "Nam",
    age: 30,
    mark: 7,

};
let newStudent = {
    id: 3,
    name: "Nguyen Thi B",
    gender: "Nu",
    age: 18,
    mark: 9.5,
    
};

let students = [];
students.push(student1, student2, newStudent);
console.log("students", students);

// Tìm ra học sinh có điểm cao nhất
// bước 1. Lấy học sinh đầu tiên là người có số điểm cao nhất
let max_score = students[0].mark;
for (let i = 1; i < students.length; i++) {  
    if (students[i].mark > max_score){
        max_score=students[i].mark;
    }
    }
console.log("điểm số lớn nhất là: ", max_score);

// Tìm ra học sinh có điểm cao nhất
// for (let i = 0; i < students.length; i++) {
 //   if (students[i].mark == max_score){
  //      console.log("Sinh viên có điểm số cao nhất là" , students[i].name);
  //      console.log(students[i]);
        
  //  }
    
  // }

// Chỉ cần 1 lần duyệt mảng vừa tìm ra học sinh có điểm cao nhất và hiện số điểm

let topStudent = students[0];
for (let i = 1; i< students.length; i++) {
   if (students[i].mark > topStudent.mark) {
    topStudent = students[i];
   }
 }

 console.log("Học sinh có điểm cao nhất là: ", topStudent);

 

    
