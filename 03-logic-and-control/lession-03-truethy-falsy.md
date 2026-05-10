4. Truethy và Falsy
- If else / toán tử 3 ngôi: điều kiện luôn được đánh giá thành Boolean.
+Nếu bạn truyền biến Boolean (true/false) → xét trực tiếp.
 if (isLogin) { ... }
if (!isSuccess) { ... }// !tên biến

+Nếu bạn truyền biểu thức so sánh (>, <, ===, !==) → kết quả là Boolean, nên an toàn.

if (age > 18) { ... }
if (name !== "") { ... }

+Nếu bạn truyền biến không phải Boolean (số, chuỗi, object, mảng) → JavaScript sẽ ép kiểu ngầm theo quy tắc truthy/falsy

 - Các giá trị falsy: false, 0 (số 0), -0,0n (BigInt zero), "" (chuỗi rỗng), null (viết thường), undefined, NaN. 
 - Còn lại dc coi là truethy trong JS, bao gồm cả [](array rỗng), {} (object rỗng)
 nhưng chú ý các bẩy:
 + "space", "0"(chữ số 0): truethy

- Cách hoạt động:
Nếu là truthy → coi như true, chạy nhánh if.
Nếu là falsy → coi như false, bỏ qua nhánh if và chạy tiếp xuống dưới (giống như “else ngầm định”)