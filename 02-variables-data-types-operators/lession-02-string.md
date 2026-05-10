1. let: 
- dùng khi biết gt của biến có thể thay đổi trong tương lai 
- làna sau ko cần dùng let để gọi biến nữa 
2. const:
- dùng khi biết gt ko bao giờ thay đổi trong tương lại: ex: pi = 3.14
3. var:
- xưa thì dùng, giờ ko dùng nữa 
4. Quy tắc đặt tên biến: naming convention in JS 
Không dc phép:
- số ko đứng đầu
- ko có khoảng trắng
- đặt tên trùng với từ khoá: vd: if, function,...
Được phép:
- bắt đầu bằng: chữ cái, $, _
- có thể chứa: chữ cái,số, $, _

Các loại rule:
- Snake case: dùng nhiều trong python/sql
- pascal case: thường dùng cho class thay vì biến
- camel case: dùng cho đặt tên biến 

Clean code:
- tránh đặt tên vô nghĩa
5. Data types:
Nhóm dữ liệu nguyên thuỷ:
- String: 
dấu nháy đơn or kép đều dc 
Cách dùng backtick `` : để nối chuỗi với tên biến 
let myName ='Anna';
let myFullName = `Toi ten là ${myName}`;// backtick 
console.log(myFullName);
- Number: dùng dấu chấm 
- Boolean: true / false

Công cụ xử lý String: 
- tenbien.length: đếu chuỗi có bn kí tự, tính cả dấu cách, ko có dấu ngoặc tròn vì đây là thuộc tính, ko phải method
- tenbien.trim(): xoá bỏ khoảng trắng hai đầu, tenbien.trim(); 
.trimStart() hoặc .trimLeft() → chỉ xóa khoảng trắng ở đầu.

.trimEnd() hoặc .trimRight() → chỉ xóa khoảng trắng ở cuối.
- tenbien.toUpperCase(), tenbien.toLowerCase() : nên chuyển về cùng 1 kiểu để so sánh. Không thay đổi chuỗi gốc, mà trả về chuỗi mới.
-tenbien.includes(): kiểm tra chuỗi con có nằm trong chuỗi cha ko. Có phân biệt hoa thường, có check cả spaces. Trả về true/ false . Nên chuyển chuỗi về viết thường trc rồi check includes sau 

- tenbien.replace('chuỗi cũ', 'chuỗi mới'); phân biệt hoa thường, chỉ thay đổi vj trí đầu tiên tìm thấy 

- tenbien.replaceAll('chuỗi cũ', 'chuỗi mới'); phân biệt hoa thường, thay thế tất cả các vị trí trùng giá trị cũ 
- Nếu chuỗi mới rỗng thì chuỗi gốc bị xóa đi phần khớp.
let str = "1.000.000";
let result = str.replaceAll(".", ""); // Thay thế tất cả dấu chấm bằng chuỗi rỗng
console.log(result); // "1000000"

- Vị trí index: tính từ 0 chứ ko phải 1
chuoime.indexOf('chuoicon'):trả về vị trí đâu tiên của chuỗi con 

- indexOf(sub[, start])
Công dụng: Trả về vị trí đầu tiên của chuỗi con trong chuỗi cha.
Đặc điểm:
Nếu không tìm thấy → trả về -1.
Có thể truyền tham số thứ hai để chỉ định vị trí bắt đầu tìm kiếm.

- indexOf(sub[, start])+ n/ -n: 
Ví dụ:

js
let str = "Hello World Hello";
console.log(str.indexOf("Hello"));     // 0
console.log(str.indexOf("Hello", 5));  // 12
console.log(str.indexOf("JS"));        // -1
3. .substring(start, end)
- chuoi.substring(batdau,ket thuc): căt từ bắt đầu đến kết thúc -1;đi từ trái sang phải 
- chuỗi.slice(batdau,ket thuc): cắt từ phải sang trái: 0, -1, -2,... kết thúc= end-1 
=> nêú ko điền end thì sẽ lấy tưf start đến hết chuỗi 

- Tư duy xử lý chuỗi (quy trình chuẩn)
Làm sạch: dùng .trim() hoặc biến thể để loại bỏ khoảng trắng thừa.

Tìm mốc: dùng .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

Cắt/Tách: dùng .substring(), .slice(), .split().

Chuẩn hóa: dùng .toLowerCase() hoặc .toUpperCase().

Kiểm tra/Thay thế: dùng .includes(), .replace(), .replaceAll().

BTN: let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// yêu cầu lấy ra được ORD-2026-123

//Method chaining: 

