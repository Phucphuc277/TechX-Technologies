// let arr = [1, 2, "three", true, null];
// console.log(arr[5]);

// let arr = ["Dien", "Gia", "Phuc"];
// for (let i = 0; i<arr.length; i++) (
//     console.log(arr[i])
// );
// arr.push("dep", "trai");
// console.log(arr);

// arr.splice(3,0,"khong");
// console.log(arr);

// arr[3] = "bay";
// console.log(arr);

// let a = arr.indexOf(2);
// console.log(a);

// arr.splice(-1,1);
// console.log(arr);

// let person = {
//     name: "Phuc",
//     age: 15,
//     job: "Ngủ nghỉ",
//     chieucao: "1cm",
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);
// console.log(person.chieucao);



// person.chieucao ("1cm");
// console.log(person.chieucao);

// if("age" in person);{
// console.log ("Người này 1 tuổi");
// }

// let hocSinh = [
//     { ten: "An", tuoi: 15, lop:"10A1" },
//     { ten: "Bình", tuoi: 16, lop:"11A2" },
//     { ten: "Châu", tuoi: 15, lop:"10A1" },
// ];


// for (let i = 0; i < hocSinh.length; i++) {
//     console.log("Tên: " + hocSinh[i].ten);
//     console.log("Tuổi: " + hocSinh[i].tuoi);
//     console.log("Lớp: " + hocSinh[i].lop);
//     console.log("             "); 
//   };
  
// let i = 0;
// while (i < hocSinh.length) {
//    if (hocSinh[i].ten === "Bình") {
//     hocSinh[i].tuoi = 17; 
//   }
//   if (hocSinh[i].ten === "Châu") {
//     hocSinh.splice(i, 1); 
//     continue;}
//   i++;}

// console.log(hocSinh);


let access = document.getElementById("code 9");
let code = access.innerHTML;
code += " midnight";
alert(code);
access.innerHTML = code;

