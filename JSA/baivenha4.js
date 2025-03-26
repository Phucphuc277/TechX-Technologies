
const numbers = [3, 10, 5, 20, 8, 15, 7, 2];


let evenSum = 0;
let oddSum = 0;


let countAboveTen = 0;


numbers.forEach(num => {
   
    if (num % 2 === 0) {
        evenSum += num;
    } else { 
        oddSum += num;
    }

   
    if (num > 10) {
        countAboveTen += 1;
    }
});


console.log("Tổng các số chẵn:", evenSum);
console.log("Tổng các số lẻ:", oddSum);
console.log("Số lượng các số lớn hơn 10:", countAboveTen);