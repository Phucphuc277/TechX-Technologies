let khong = 18;
var name = "phuc";
let di = true;

console.log();

let fullName = "điền gia phúc"
let data = fullName.split(" ");
console.log(data);
console.log("Ho la: ", data[0]);
console.log("Ten la: ", data[2]);
let upperFullname = fullName.toUpperCase();

function capitalizeFirstLetter(str) {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' '); 
  }
  
 
  const input = "điền gia phúc";
  const result = capitalizeFirstLetter(input);
  console.log(result); 

  
  let thutu = prompt("Nhập số thú tự: ");
  alert ("Số thứ tự bạn đã nhập: " + thutu);
  
  