
let myString = "Hello";
let addedString = myString + " World"; 
let substring = addedString.substring(0, 5); 
let stringLength = addedString.length; 
console.log("Chuỗi sau khi nối:", addedString);
console.log("Chuỗi sau khi cắt:", substring);
console.log("Độ dài chuỗi:", stringLength);


let userInput = prompt("Nhập vào một chuỗi:"); 
let upperCaseInput = userInput.toUpperCase();
console.log("Chuỗi viết hoa:", upperCaseInput);


let tenName = prompt("Nhập vào tên của bạn:");
let tuoiAge = Number(prompt("Nhập vào tuổi của bạn:"));
console.log(`Tên bạn là ${tenName} và bạn ${tuoiAge} tuổi.`);


let sentence = prompt("Nhập vào một câu:");
let sentenceLength = sentence.length;
console.log("Độ dài của câu là:", sentenceLength);