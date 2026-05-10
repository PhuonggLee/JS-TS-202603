//1. Spread operator: sao chép và gộp mảng
const mang1 =[1,2,3];
//clone mang1
const mang2 = [...mang1]
console.log(mang2);//[ 1, 2, 3 ]
// tác động lên mảng clone ko ảnh hưởng đến mảng gốc
mang2.push(4);
console.log(mang2);[ 1, 2, 3, 4 ]
//Gộp mảng
//Chèn phần từ vào vị trí mong muốn
//2. Object: sao chép và ghi đè
const configMacDinh= {
    baseURL: "https://staging.test",
    timeout: 30000,
    headless: true,
    retires: 2
}
//ghi đè 2 fields và giữ nguyên phần còn lại
const configProd ={
    ...configMacDinh,
    baseURL: "https://production.test",
    retires:3
}
console.log(configProd);
//{
//   baseURL: 'https://production.test',
//   timeout: 30000,
//   headless: true,
//   retires: 3
// }
//3. Spread trong tham số của hàm
const danhSachGia = [1000,2000,3000,4000];
const giaMax = Math.max(...danhSachGia);// hàm math.max chỉ nhận tham số lẻ thôi 
//nên phải rã array ra
//BT nhỏ:
//Dữ liệu ban đầu:
const configMacDinhBaiTap = {
baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
timeout: 30000, // Thời gian chờ tối đa là 30 giây
headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
retries: 2, // Số lần thử lại khi có lỗi
};
// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
timeout: 10000,
headless: false,
};
// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];
// Danh sách tag cần thêm
const tagsThem = ["  check out  ", "  smoke  ", "  regression "];
// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];
// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";
//Xử lý:
const configCuoi = {
    ...configMacDinhBaiTap,
    ...configGhiDe
}
//console.log(configCuoi);
const tatCaTags =[...tagsMacDinh,...tagsThem];
let tagsDaLamSach =[];
for (const tag of tatCaTags){
    let cleanTag = tag.trim().toLowerCase();
    if (cleanTag ===""){
        continue;
    }
    if (!tagsDaLamSach.includes(cleanTag)){
        tagsDaLamSach.push(cleanTag);
    }
}   
console.log(tagsDaLamSach);//[ 'smoke', 'login', 'check out', 'regression' ] 
//- Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite
//const tenSuiteRaw = "  Payment  Flow  ";
//

//. Phần callback
//Arrow function hay dùng callback 
//Callback thường dùng ở các hàm xử lý array
const student1 = [
    { name1: "An", age1: 20, major1: "IT" },      // element 1
    { name1: "Bình", age1: 22, major1: "Economics" }, // element 2
    { name1: "Chi", age1: 21, major1: "Design" }  // element 3
];

const tenTuoi = student1.map((u) => { // arrow function đúng cú pháp
    return `${u.name1} ${u.age1}`;
});
console.log(tenTuoi);
//Filter
const sanPhamTest = [
    {giá: 150,hãng: "LG", tonKho: true},
    {giá: 250, hãng: "SamSung", tonKho: false}
]
//Lọc các sp những sp còn hàng
const sanPhamConHang = sanPhamTest.filter((sanPham)=>{
return sanPham.tonKho ===true; 
})
console.log(sanPhamConHang);
//Lọc giá nhỏ hơn 200
const sanPhamNhoHon200 = sanPhamTest.filter((sp)=>{
return sp.gia <200;
})
//Lọc vừa nhỏ 200 và còn hàng
const sanPhamHopLe = sanPhamTest.filter((i)=>{
 return i.tonKho ===true && i.gia <200;
})
//Find(): tìm phần tử đầu tiên thoả mảng đk
const userTest = [
  {id:1, ten: "Anna", role: "admin"},
  {id:2, ten: "Linda", role: "admin"},
  {id:3, ten: "Jack", role: "tester"}
];
//tim phần tử có role là admin
const adminUser = userTest.find((a)=>{
return a.role.trim()==="admin";
})
console.log(adminUser);
// const adminUser = users.find((user) => user.role === "admin")
//có thể viết arrow function kiểu rút gọn, ko cần dùng return


