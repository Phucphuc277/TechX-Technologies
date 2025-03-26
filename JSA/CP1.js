
let hocSinh = [
    { hoTen: "Nguyễn Xuân Son", diaChi: "Bacu", chieuCao: 170, canNang: 70, hocLuc: "Khá" },
    { hoTen: "Bùi Đức Hiếu", diaChi: "Lê Lợi", chieuCao: 175, canNang: 69, hocLuc: "Giỏi" },
    { hoTen: "Vũ Hầ My", diaChi: "Chí Linh", chieuCao: 165, canNang: 55, hocLuc: "Giori" },
];

for (let i = 0; i < hocSinh.length; i++) {
    console.log("Họ và tên: " + hocSinh[i].hoTen);
    console.log("Địa chỉ: " + hocSinh[i].diaChi);
    console.log("Chiều cao: " + hocSinh[i].chieuCao + " cm");
    console.log("Cân nặng: " + hocSinh[i].canNang + " kg");
    console.log("Học lực: " + hocSinh[i].hocLuc);
    console.log("             ");
}

hocSinh[0].diaChi = "Trương Công Định";
hocSinh[1].chieuCao = 165;
hocSinh[1].canNang = 65;
hocSinh[2].hocLuc = "Trung Bình";
hocSinh.splice(1, 1);
console.log("Danh sách học sinh sau khi cập nhật:");

for (let i = 0; i < hocSinh.length; i++) {
    console.log("Họ và tên: " + hocSinh[i].hoTen);
    console.log("Địa chỉ: " + hocSinh[i].diaChi);
    console.log("Chiều cao: " + hocSinh[i].chieuCao + " cm");
    console.log("Cân nặng: " + hocSinh[i].canNang + " kg");
    console.log("Học lực: " + hocSinh[i].hocLuc);
    console.log("             ");
}
