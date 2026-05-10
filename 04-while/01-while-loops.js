//yếu tô 1:
let soLanClick = 1;
//yếu tô 2:
while (soLanClick<=3){
    console.log(`Dang click lan thu: ${soLanClick}`);
    //yếu tố 3:
    soLanClick++;
};
console.log("Đã click xong lần 3. Thoát khỏi vòng lặp");
// Nếu đk luôn đúng, thì vòng lặp chạy mãi, sẽ treo máy 
// let isLoggedIn= true;
// while(isLoggedIn){
//     console.log("Luôn đúng");
// }
let maxRetry = 5;//số lần thử
let currentRetry = 1// lần thử hiện tại
let isFound = false // Trạng thái tìm thấy nút
//Array
let colorList = ["red", "blue", "white"];// vị trí index bắt đầu = 0 =red
let blankBox =[];
let randomDataType = ["car", 123, "", null, true ]// Js array có thể chứa nhiêu loại dữ liệu
//Tuy nhiên, nên cố gắng đồng nhấp kiểu dữ liệu khi khai báo trong cùng 1 array
//Lấy phần tử dựa vào vị trí index
console.log(colorList[1]);// trả về blue
console.log(colorList[5]);// trả về undefined vì ko có index = 5 trong array này 
//push
let danhSachLoi = [];
danhSachLoi.push("Lỗi 1: Nút đăng nhập ko dc bấm ");
danhSachLoi.push("Lỗi 2: Sai chính tả");
//includes
let cacTrangThaiChoPhep =["Pending", "Approved","Shipped"];
let trangThaiThucTe = "Approve";
if(cacTrangThaiChoPhep.includes("Approve")){
    console.log("Test passed");
}else{
    console.log("Test failesd");
}
//join
let tags =["Auto", "Manual", "Dev"];
let tagsString = tags.join("-");
console.log(tagsString);
//index of
let danhSachMenu = ["Home", "Hotel", "Hostel"];
console.log(danhSachMenu.indexOf("Hotel"));
let gioHang = [

    "Bàn phím cơ",
  
    "Chuột gamin",
  
    "Màn hình 27 inch",
  
    "Tai nghe bluetooth",
  
  ];
  
  //1. In ra tổng số sản phẩm
  
  // 2. In ra sản phẩm đầu tiên
  
  //3. In ra tên sản phẩm cuối cùng
  
  //4. thêm 1 cái lót chuột vào cuối giỏ hàng
  console.log(gioHang.length);
  console.log(gioHang[0]);
  console.log(gioHang.length-1);
  console.log(gioHang.push("Lót chuột"));
  // object
  let userTest = {
    name: "Anna",//key1: value1, key2: value2,..
    age : 30,
    email: "bav122@gmail.com",
    isVip: true,
    role: ["admin", "VIP user"],
    "my address":"12 Le Do",
    "first-level": 12
  }
  //
  let thongTinCanLay = "email"; 
  console.log(userTest[thongTinCanLay]);
  //backtick ko dùng dc
   
//   let config ={browser1: "chrome", browser2: "safari"};
//   console.log(`Ban dau ${config}`);//Ban dau [object Object]
//   console.log("Ban dau", config);//Ban dau { browser1: 'chrome', browser2: 'safari' }
// // const :ko cho gắn lại biến nhưng cho phép đổi cái ruột bên trong 
// let cat = {age: 12};
// cat.age = 13; 
// //
// let spTiki= {id:"SP01", name: "Iphone",Price: "12"};
// //

let apiResponse = {

    userId: 9999,
  
    userName: "neko_auto",
  
    role: "admin",
  
    isActive: "yes",
  
  };
  
  //Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
  
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"
let  apiArray = Object.keys(apiResponse);
console.log(apiArray.length);
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
console.log(Object.hasOwn("userID", "email","role"));
//kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo

//Chú ý điều kiênh vòng lặp for: 
let arr= ["A", "B", "C"];
for (let i =0; i<= arr.length; i++){// điều kiện sai 
    console.log(arr[i]);
}
//dau tien: i=0 , i<=3 -> arr[0]= A
//lan 2: i=1, i<=3-> arr[1] = B
//lan 3: i=2, i<=3 -> arr[2] = C
//lan 4: i= 3, i<=3 (đúng) -> arr[3] = undefinded vì ko có arr[3])
// đúng là 
let arr1= ["A", "B", "C"];
for (let i =0; i< arr1.length; i++){// điều kiện đúng
    console.log(arr1[i]);
}// biến i chỉ tồn tại trong block for thôi. 
//console.log(i);// sai -> undefined
let soLuongDon =5;
for (let i =1; i< soLuongDon; i++){
  let maDonHang= `ORDER-${i}`;// scope xử dụng biến 
  console.log(maDonHang);
}