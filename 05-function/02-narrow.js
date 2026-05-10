//Hoisting:
//Function expression
//checkLoginStatus(): sẽ ra lỗi chưa khai báo-> hàm expression ko hổ trợ hoisting 
const checkLoginStatus = function(){
    return true;
}
//Ham declaration có thể bị overwrite nếu hàm bị viết trùng tên
function tinh (a,b){
    return(a+b);
}
function tinh (a,b){
    return(a*b);
}
console.log(tinh(2,3));//ra 6: vì hàm ở trên bị overwrite do trùng tên
//Viêt method bên trong object
const sanPham = {
    ten: "iphone 17",
    gia: 200000,
    //c1: viết function express cổ điển
    //c2: viết 1 hàm method shorthand -> nên dùng
    //c3: ko nên sd arrow function khi viết method trong ọbject 
}
//object có data mô tả cả data và hành vi thì thường viết function trong object 
const cart ={
    item: 3,
    getSummary(){
        return`có ${this.item} sản phẩm`;
    }
}
console.log(cart.getSummary());
//object formatter có formatPrice, formatDate=> object tiện ích
//Dùng class nhiều hơn
const giaSanPham =[15000,20000,25000];
//declaration function
function locGiaCao(gia){
    return gia > 20000;
}
//arrow để call back
const ketQua = giaSanPham.filter((gia) => gia>20000);
console.log(ketQua);//[25000]
// Phân biệt return và break
//Return : xong đk này, kết thúc luôn các đk khác của function
//break: chỉ kêt thúc vong lặp nhưng vẫn check đk khác của function -> break chỉ dùng trong vòng lặp
//if-else if-else thì khỏi return??
//Parametter
function taoTestUser (ten, tuoi=25, email, vaitro="tester"){
console.log(`${ten} ${tuoi} ${email} ${vaitro}`);
}
taoTestUser("Anna", "testemail.com");// ko giữ chỗ cho tuôi nên email bị nhảy vô chỗ tuổi
//Anna testemail.com undefined tester
taoTestUser("Anna", undefined, "testemail.com");// ko giữ chỗ cho tuôi nên email bị nhảy vô chỗ tuổi
//trả về: Anna 25 testemail.com tester
//Rest parametter: dùng ... gom 
function tongTien (...danhSachGia){
    //danh sach la 1 mang
    let tong =0;
    for (const gia of danhSachGia){
        tong+= gia;;
    }
    return tong;
}
console.log(tongTien(10, 20, 30,40));
//
const danhSach =["admin", "12345", "staging"];
//Destructuring: dựa trên index
const [user, pass, moiTruong] = ["admin", "12345", "staging"];
console.log(pass);
//BT nhỏ
// // Ví dụ dữ liệu đầu vào

// // Khi chạy automation test, ta nhận được một danh sách kết quả như sau:

const testRuns = [
  [
    " login smoke ",
    { browser: "   chromium   ", env: "  staging  " },
    "  PASS ",
  ],
  [
    " checkout payment ",
    { browser: "   firefox   ", env: "  prod  " },
    "  FAIL ",
  ],
  [
    " search product ",
    { browser: "   webkit   ", env: "  staging  " },
    "  PASS ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];
// Bài toán
// Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.
// Dùng destructuring để bóc tách từng phần tử trong mảng.
//Gợi ý:
//const [rawTestName, { browser, env }, rawStatus] = item
//Tương ứng: 
//rawTestName: tên test thô,
//{ browser, env }: thông tin môi trường chạy
//rawStatus: trạng thái test thô
//Rule xử lý
//Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
//Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
//Nếu dữ liệu hợp lệ:
//Tạo chuỗi theo định dạng: testName - browser - env
//Ví dụ: login smoke - chromium - staging
//Nếu PASS thì đưa vào mảng passed.
//Nếu FAIL thì đưa vào mảng failed.
//Kết quả mong đợi
//Hàm cần trả về dữ liệu theo dạng:
//-----


