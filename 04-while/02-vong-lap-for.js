//1. Vòng lặp for .. of đơn giản: lấy ra từng element của array
let fruits = ["Tao", "Cam", "Oi"];

for (let fruit of fruits) { // Tạo một biến tên là fruit. Mỗi lần lặp, fruit sẽ được gán bằng element tiếp theo trong mảng fruits.
    console.log(fruit);     // In ra giá trị hiện tại của fruit.
    // Lần lặp 1: fruit = "Tao" → in ra "Tao"
    // Lần lặp 2: fruit = "Cam" → in ra "Cam"
    // Lần lặp 3: fruit = "Oi"  → in ra "Oi"
    // Sau khi duyệt hết phần tử cuối cùng, vòng lặp kết thúc.
}
//2. Duyêt qua array có element là đều la object 
let danhSachUser =[
    {ten: "Anna", role: "admin"},
    {ten: "John", role: "customer support"}
]
for (let user of danhSachUser){// tạo 1 biến tên là user.
  //Type= object vì element của array bây giờ đang là object 
  console.log(user);//Mỗi vòng lặp sẽ in ra nguyên object:
  // Lần 1: {ten: "Anna", role: "admin"}
  // Lần 2: {ten: "John", role: "customer support"}
  console.log(`${user.ten}- ${user.role}`);//mỗi là lặp sẽ in ra tên - role.
   // Lần 1: Anna - admin
  // Lần 2: John - customer support
  //Vì user là object nên phải dùng cú pháp chấm (user.ten, user.role) 
  //để lấy value theo key.
}
//3. Biến đổi object thành array rồi dùng for of
let configs = {browser:"chrome", timeout:500};
for (let cap of Object.entries(configs)) {
  // Object.entries(configs) sẽ tạo ra một mảng cha gồm các element là các cặp mảng [key, value]:
  // [["browser", "chrome"], ["timeout", 500]]
  // Vòng lặp for...of sẽ duyệt qua từng element của mảng cha này.
  // Vòng 1: cap = ["browser", "chrome"]
  // Vòng 2: cap = ["timeout", 500]
  console.log(`${cap[0]} - ${cap[1]}`);
  // cap[0] là key, cap[1] là value.
  // Vòng 1: in ra "browser - chrome"
  // Vòng 2: in ra "timeout - 500"
}
//4. Dùng for of lọc qua string
const myName1 = "Linda";
for (let name of myName1){
console.log(name);
//Vòng 1: "L", vòng 2: "i", vòng 3: "n",...
}
let danhSachUrl = ["/login", "/dashboard", "/profile"];
// dùng for of : mỗi vòng lấy ra 1 url và in ra câu kiểm tra : url
for (let url of danhSachUrl){
    console.log(`Dang kiem tra: ${url}`);
}
// for in
for (let key in configs){
    console.log(`${key}- ${configs[key]}`);
}
//BT nhỏ:
let products = [

{ ten: "iphone", gia: 200000 },

{ ten: "airpods", gia: 300000 },

{ ten: "macbook", gia: 10000 },

];
//dùng for of + for in để in ra tên và giá của products
for (let product of products) {

    for (let key in product) {

        console.log(`${key}: ${product[key]}`);

    }

    console.log("---");

}
//BT nhỏ
let sanPham = [
    { ten: "iphone", hetHang: true },
    { ten: "airpods", hetHang: false },
    { ten: "macbook", hetHang: true }
  ];
  //in ra sp hết hàng
//   C2: 
  for (let sanPham1 of sanPham) {

    if (!sanPham1.conHang) {
  
      console.log(`Sản phẩm hết hàng: ${sanPham1.ten}`);
  
      break; // dừng vòng lặp ngay khi tìm thấy sản phẩm hết hàng đầu tiên
  
    }  
  
  }
 //BT nhỏ:
 //Mình đang test trang tiki, lấy dc danh sách 6 sp. Yêu cấu:
 // taoj 1 array rôngr danhSachVip
 //Nếu giá > 1000, ta cho sp vào ds vip
 //In ra ds vip và sô lương vip
 let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];
let danhSachVip = [];
for (gia of danhSachGia){
  if (gia.danhSachGia >1000){
    danhSachVip.push(gia);
  };
  }
  // in danh sách VIP
  
  console.log("Danh sách VIP:", danhSachVip);
  
  // in số lượng VIP
  
  console.log("Số sản phẩm VIP:", danhSachVip.length);
 
  
  