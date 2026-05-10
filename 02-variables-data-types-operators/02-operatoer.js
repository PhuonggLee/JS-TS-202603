//Toan tử: Operator
//1. Dấu +: nối chuỗi 
const x = 5;
const y ="6";
console.log(typeof(x+y));// trả vè string = 56
//2. Phép trừ: luôn cố gắng ép kiếu chuỗi thành số khi gặp dấu trừ
const t = "-6";
console.log(t- 5);// ép "-6" thành -6. rồi -6-5 = -11
//3. Toán tử gán: dấu = 
let a = 10; 
a = a+5;// a= 15. nếu a khai bao bằng const thì ko thể gắn lại 
console.log(a);// 15
//4. Toán tử gắn rút gọn
// 5. Toán tử so sánh:trả về true/ false
// Bằng nhau:
// == : chỉ quan tâm giá trị, ko care kiểu dữ liệu, tự động ép kiểu cho chúng giống nhau
//===: so sánh cả giá trị và kiểu dữ liệu 
console.log("10"== 10);// true
console.log(0==false);// true
console.log("10"=== 10);//false
//6. Toán tử logic 
//phép AND: 1 cái sai thì sẽ trả về false. cần tất cả điều đúng thì trả về trư
// phép OR: chỉ cần 1 cần đúng thì trả về true
//7. Toán tử tăng giám
//postfix: i++: trả về giá trị cũ của i, rồi sau đó mới tăng lên 1
//prefix: ++i: tăng lên 1 trước, rồi mới tar về giá trị mới 




