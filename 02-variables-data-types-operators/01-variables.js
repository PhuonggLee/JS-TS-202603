let orderID = ' TC001 - AB01';
//1. length; là thuộc tính, ko có dấu (). trả về number 
console.log(orderID.length); //13 
//2. trim(): bỏ khoảng trắng đầu và cuối của chuỗi.
console.log(orderID.trim()); 
//trimStart();bỏ khoảng trắng đầu 
const pricePen = ' 150.000d ';
console.log(pricePen.trimStart());
//trimEnd(): bỏ khoảng trắng ở cuối chuỗi
console.log(pricePen.trimEnd());
//Chú ý: Tất cả các lệnh trim chỉ trả về chuỗi mới mà ko làm thay đổi chuổi gốc.
//3. toUpperCase(): chuyển toàn bộ chuỗi thành viết hoa hết
const bookName = 'this is Jonh\'s book'; // nếu dùng dấu ngoặc kép thì ko cần dùng escape \
console.log(bookName.toUpperCase());
console.log(bookName);
//4. toLowerCase(): chuyển toàn bộ chuỗi thành viết thường
const bookAuthor = 'Robert Anndy';
console.log(bookAuthor.toLowerCase());
console.log(bookAuthor);
//5. includes(sub[, start]): Kiểm tra chuỗi con có tồn tại trong chuỗi cha không.
//trả về true/ false. Phân biệt hoa thường, có check cả space. Có thể có vị trí index start
//Nên chuyển chuỗi về viết thường trc rồi check includes sau 
const color =' Green blue pink blue black';
console.log(color.includes('bl'));// trả về true
console.log(color.includes('Bl'));// trả về false
console.log(color.includes('bl '));// trả về false
console.log(color.includes('Gr', 10));// trả về false
//6.replace(cũ, mới): Thay thế lần xuất hiện đầu tiên của chuỗi con. Trả về chuỗi mới.
const fruit = 'apple banana Apple Apple1 ';
console.log(fruit.replace('Apple','tao'));// trả về: apple banana tao Apple1 
//7.replaceAll(cũ, mới): Thay thế tất cả các lần xuất hiện của chuỗi con. Trả về chuỗi mới.
const car = 'BMW Ferari Bmw BMW1';
console.log(car.replaceAll('BMW','sieu xe'));// trả về: sieu xe Ferari Bmw sieu xe1
//8. indexOf(sub[, start]) : index tính từ 0. Trả về vị trí đầu tiên của chuỗi con.
//Trả về -1 nếu không tìm thấy.
const computure = 'Apple dell Dell DEll dell';
console.log(computure.indexOf('de'));// trả về: 6
//n    :  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
//char :  A p p l e   d e l l   D  e  l  l    D  E  l  l    d  e  l  l
console.log(computure.indexOf('de',7));// trả về: 21 ??
console.log(computure.indexOf('ap'));// Trả về -1 nếu không tìm thấy.
//9.substring(start, end): 
//Cắt chuỗi từ start đến end - 1. Không hỗ trợ chỉ số âm.
//Nếu start > end, sẽ tự động hoán đổi. 
//Nếu start = end → trả về chuỗi rỗng.
//Nếu ko input end thì cắt đến hết chuỗi 
const myOrderID ='SP001 - BA002';
console.log(myOrderID.substring(2,9)); // trả về: 001 - B
console.log(myOrderID.substring(9,2)); // trả về: 001 - B
console.log(myOrderID.substring(2)); // trả về: 001 - BA002
//10.slice(start, end): Cắt chuỗi từ start đến end - 1. 
//Hỗ trợ chỉ số âm để tính từ cuối chuỗi.
//Nếu start >= end → trả về chuỗi rỗng.
//Nếu ko input end thì cắt đến hết chuỗi 
const herOrderID ='SP002-TC002';
console.log(herOrderID.slice(2,6)); // trả về: 002-
console.log(herOrderID.slice(-6,-2)); // trả về: -TC0
console.log(herOrderID.slice(-2,-6)); //Nếu start > end → trả về chuỗi rỗng.

//Tư duy xử lý chuỗi:
//1. Làm sạch: dùng .trim() hoặc biến thể để loại bỏ khoảng trắng thừa.
//2. Tìm mốc: dùng .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().
//3. Cắt/Tách: dùng .substring(), .slice(), .split().
//4. Chuẩn hóa: dùng .toLowerCase() hoặc .toUpperCase().
//5. Kiểm tra/Thay thế: dùng .includes(), .replace(), .replaceAll().







