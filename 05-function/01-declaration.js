//Khai báo function
function dangNhap(taikhoan, matkhau){
console.log(`Nhap tai khoan: ${taikhoan}`);// csl ko trả về giá trị của hàm nên ko cần return
console.log(`Nhap mat kahu: ${matkhau}`);
};
//1. ko có return
function tinhTong(a, b){
    const result = a+b;
    console.log(result);
}
//gán hàm cho 1 biến
let tienThanhToan = tinhTong(100, 2);
// rồi in biến đó ra 
console.log(tienThanhToan);// sé ra undefined vì ko có return 
//2. có return
function tinhTong1(a, b){
    const result1 = a+b;
    console.log(result1);
    return result1;
    console.log("Đoạn này ko chạy vì phía trên có return");
}
let tienThanhToan1 = tinhTong1(100, 2);
console.log(tienThanhToan1);
//  BT nhỏ
//Hãy in ra giá sp sau khi đã làm sạch: ex: 10000
function cleanPrice(rawString) {
if (!rawString) return 0;// khi điều kiện đúng → 
//thực thi return 0. Lúc này hàm kết thúc ngay, không chạy tiếp xuống dưới nữa.
//Khi đk sai, bỏ qua return = 0, tiếp tục chạy các dòng bên dưới 
let cleanNumber = rawString.replace(/\D/g, "");
return Number(cleanNumber);
}
let sp1 = " Giá: 1.500.000 VND ";
let sp2 = " 250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));
//đk đúng: chạy nhánh if  
//đk sai: bỏ qua if luôn vì if có return. chạy đoạn phía sau 


