// let a=10;
//  a +=5;
//  console.log(a);

//  let x =10;
//  let y ="19";
//  let d =1;
//  let e =9;
//  console.log(x == y);
//  console.log(x === y);
//  console.log(x != y);
//  console.log(x !== y);
 
//  console.log(x > d && d < e);
//  console.log(x > d || d < e);

// let a=10;
// let b =20;
// if (b % 2 == 0) {
//     console.log("Day la so chan");
// }

// if (a < b) {
//     console.log("a < b");
// } else if (a >b) {
//     console.log("a > b");
// }

// let thutu = prompt("Nhập số kem bạn có: ");
// thutu = Number(thutu); 

// if (thutu >= 5) {
//     alert("Ăn nhanh lên kem tan bây giờ");
// } else if (thutu === 3) {
//     alert("Kem sắp hết!");
// } else if (thutu === 1) {
//     alert("Lần 1!");
// } else if (thutu === 2) {
//     alert("Lần 2!");
// } else if (thutu === 0) {
//     alert("Hết rồi!");
// } else {
//     alert("Ăn kem mà nhập gì tùm lum vậy!");
// }


// for (let i=1; i <= 100; i+=2) {
//      console.log(i);
// }

// let y=6;
// while (y <= 50) {
//     console.log(y);
//     i++;
// }

// let y=6;
// while (true) 
    
// { 
//     y++;
//     if (y == 50);
//     console.log(y);
//     break;
// }

// let y=1;
// do {
//     console.log(y);
//     y++;
// } while (y < 1);

// let thutu = Numberprompt ("Nhập số vào đây: ");

// while (thutu > 0){
//     n = Numberprompt ("Nhập số vào đây: ");
// };

// let x = Number(prompt ("Nhập số vào đây: "));
// let y = Number(prompt ("Nhập số khác vào đây: "));

// if (x > y) {
//     alert("x lớn hơn y")
// }
// else {
//     alert("y lớn hơn x")
// }

// // let a = prompt("a:")
// // let b = prompt("b:")

// // let x  = a>b ? a:b;
// // console.log(x);

// Tạo một mảng số nguyên
let numbers = [3, 8, 15, 6, 10, 21, 4, 9, 2];

// Khởi tạo biến cho tổng số chẵn, tổng số lẻ và số lớn hơn ngưỡng
let evenSum = 0;
let oddSum = 0;
let threshold = 10; // Ngưỡng để kiểm tra
let countAboveThreshold = 0;

// Sử dụng vòng lặp để duyệt qua mảng
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    // Kiểm tra số chẵn hay số lẻ bằng if-else
    if (num % 2 === 0) {
        evenSum += num; // Cộng vào tổng số chẵn
    } else {
        oddSum += num; // Cộng vào tổng số lẻ
    }

    // Kiểm tra số lớn hơn ngưỡng
    if (num > threshold) {
        countAboveThreshold++;
    }
}

// In kết quả ra console
console.log("Tổng các số chẵn:", evenSum);
console.log("Tổng các số lẻ:", oddSum);
console.log("Số lượng số lớn hơn", threshold, "là:", countAboveThreshold);



