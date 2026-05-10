1. Phân biệt i++ và ++i:
- Standalone (dùng riêng lẻ):  
Khi viết ++i; hoặc i++; mà không gán cho biến khác, không dùng trong điều kiện.
→ Giá trị trả về bị bỏ qua, chỉ quan tâm đến việc i tăng thêm 1.
Ví dụ:
let i = 5;
++i;   // i = 6
i++;   // i = 7
- Assignment (phép gán):  
Khi dùng trong phép gán, giá trị trả về của biểu thức được gán cho biến khác.
→ Lúc này phải quan tâm đến giá trị trả về.
++i: tăng i trc rồi mới trả về giá trị i mới (sau tăng)
i--: trả về giá trị i ban đầu, rồi mới tăng i lên sau 
Ví dụ:
let i = 5;
let a = ++i; // a = 6, i = 6
let b = i++; // b = 6, i = 7
- Londition / Loop (điều kiện hoặc vòng lặp):  
+Condition (if, while) → quan tâm đến giá trị trả về để so sánh.
+Loop (for) → sự khác biệt nằm ở thời điểm tăng:
i++ → kiểm tra trước, tăng sau.
++i → tăng trước, kiểm tra sau.
2. Toán tử logic:
Thứ tự thực hiện các toán tử logic (nếu không có ngoặc)
! (NOT) → cao nhất, thực hiện trước tiên.
&& (AND) → thực hiện sau !.
|| (OR) → thực hiện sau cùng.