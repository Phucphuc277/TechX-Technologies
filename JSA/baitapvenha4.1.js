
const n = 5;
console.log("Hình tam giác số:");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}


const inputString = "abc";


let resultString = "";
for (let i = 0; i < inputString.length; i++) {
    resultString += inputString[i];
}
for (let i = inputString.length - 2; i >= 0; i--) {
    resultString += inputString[i];
}
console.log("Chuỗi đối xứng:", resultString);