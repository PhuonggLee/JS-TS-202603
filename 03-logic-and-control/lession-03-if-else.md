1. If (đk đúng ) else (đk sai)
-if có thể đứng một mình. Khi điều kiện đúng, khối lệnh bên trong sẽ chạy. Khi điều kiện sai, thì… nó không làm gì cả 
2. If-else if- else if ... else
Nên viết đk thành biến nếu nó dài (>=2 đk) để dễ nhìn và debug.
Viết test case thành các khối, tránh phụ thuộc vào nhau
3. Toán tử 3 ngôi:
let bien = đieu kien ? giá trị trả về nếu đúng : gía trị trả về nếu sai
- Khi nao nên dùng toán tử 3 ngôi:
+dùng để tạo ra 1 gía trị (biến)
+dùng khi 1 bài toán chỉ có 2 KQ
+Mỗi vế đều ngắn, dễ hiểu.
+Có thể có hơn 2 đk: nhưng phức tạp, check cấu trúc?
+có thể dùng trong csl : in ra giá trị theo đk mà ko cần qua biến trung gian 
//console.log(`Ready: ${isReadyToRelease?"YES": "FALSE"}`);
- Khi nào dùng if-else:
+câu lệnh phức tạp lồng nhau nhiều biến, có thể chứa nhiêu câu lệnh trong if-else.
 4. Swith Case
+Dùng khi: có 1 biểu thức duy nhất trong switch. Mỗi case là 1 giá trị cố định để so khớp nghiêm ngoặt ===.
+switch case: ko manh so sánh đk phức tạp nhưng mạng so sánh số lượng đk so sánh cố định (thường >=4 cases)
+switch: chỉ so sánh gía trj cố định nhưng if-else có thể so sánh khoảng: ex: age > = 18
+swtich: cho phép gom nhóm điều kiện 
+Có hai cách khi dùng switch với giá trị Boolean:
1.C1: switch(true)
Mỗi case phải là một biểu thức Boolean (ví dụ score >= 80).
Khi biểu thức đó trả về true, nó khớp với switch(true) và nhánh đó chạy.

let score = 82;
switch (true) {
  case score >= 95:
    console.log("EXCELLENT");
    break;
  case score >= 80:
    console.log("GOOD");
    break;
  case score >= 60:
    console.log("NEEDS IMPROVEMENT");
    break;
  default:
    console.log("CRITICAL");
}
//C2: switch(biếnBoolean):
Giá trị trong ngoặc là chính biến Boolean
Các case phải là true hoặc false để khớp.
let isLoggedIn = false;

switch (isLoggedIn) {
  case true:
    console.log("Đã đăng nhập");
    break;
  case false:
    console.log("Chưa đăng nhập");
    break;
}
--------------





