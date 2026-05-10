//Khai biến object
//c1: khai báo trực tiếp
const car = {
    type: "Fliat",
    "model-vip": "500",
    "my color": "white"
}
//c2: khai báo qua keyword
const userRoles = new Object();
userRoles.use1= "admin";
userRoles.user2= "customer support";
console.log(userRoles);
//Truy cập 
console.log(car.type);
console.log(car["model-vip"]);// dùng [] nếu key có dấu gạch ngang
console.log(car["my color"]);// dùng [] nếu key có space
// dynamic key
const brand ="type";// vì typeof car.type trả về string nên phải có "".
console.log(car[brand]);// trả về Fliat
// Thao tác:
 car.newPrice= 500;// thêm thuộc tính (gồm cả thuộc tính name= key và value)
 console.log(car);
 delete car.newPrice//xoá gồm cả thuộc tính name= key và value)
 console.log(car);
 //Object chứa array, Object chứa object con 
 const objStaff ={
    company: "ABC vip",
    staffInfo: {
        staffID: 120,
        email: "hsk123abc@gmail.com ",
        age: 35,
        name: "Linda Tran",
        size: ["Size-S", "Size-M","Size-L"]
    },
    "company address": "12 Nhi Trung, Hoi An",
 }
 // Cach truy cap object đặc biệt
const leanedEmail = objStaff.staffInfo.email.trim();
console.log(leanedEmail);//hsk123abc@gmail.com
const selectedSize = objStaff.staffInfo.size[1];
console.log(selectedSize);//Size-M
//Các phương thức của object
console.log(Object.keys(objStaff));// trả về 1 mảng keys: ["company", "staffInfo","company address"]
console.log(Object.values(objStaff));// trả về mảng values 
console.log(Object.entries(car));// trả về mảng các căp [key1, value1],[key2, value2]
console.log(Object.hasOwn(car, ["my color"]));// true 







