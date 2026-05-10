-  Ép kiểu (Type Casting)
Khi muốn tính toán, dữ liệu phải được chuyển về kiểu Number.
- Các cách ép kiểu phổ biến:
1.  Number() : 
Cố gắng chuyển toàn bộ chuỗi thành số.
Nếu chuỗi chứa ký tự không hợp lệ → kết quả là NaN (Not a Number).
Ví dụ:
Number("100") → 100
Number("100abc") → NaN

2. parseInt()
Chỉ lấy phần số nguyên từ trái sang phải. 
Gặp ký tự không phải số thì dừng lại.
Bỏ qua phần thập phân.
Ví dụ:
parseInt("123abc") → 123
parseInt("12.34") → 12
3. parseFloat()
Giữ lại phần thập phân.
Hoạt động tương tự parseInt(), nhưng đọc cả số thập phân.
Ví dụ:
parseFloat("12.34abc") → 12.34
- Một số phương thức làm việc với Number
1. toFixed(n): Làm tròn đến chữ số n. Nếu thiếu, sẽ tự thêm số 0.
Ví dụ:
(12.345).toFixed(2) → "12.35"
(12.3).toFixed(4) → "12.3000"

2. Math.round(x) làm tròn về số nguyên gần nhất. 
- Đối với số âm: nếu phân thập phân = 0.5 thì KO làm tròn lên
Math.round(2.45)//2
Math.round(2.5)//3
Math.round(-2.51)//-2.5
Math.round(-2.5)//-2
3. Math.ceil(x) → làm tròn lên.
Ví dụ: Math.ceil(4.1) → 5

4. Math.floor(x) → làm tròn xuống.
Ví dụ: Math.floor(4.9) → 4

5. Math.random() → trả về số thập phân ngẫu nhiên từ 0 đến <1.

6. Random trong khoảng [min, max]  
Math.floor(Math.random() * (max - min + 1)) + min
7. padStart(do dai chuỗi, [padString]): 
Thêm ký tự vào đầu CHUỖI (typeof =string) cho đến khi đạt độ dài targetLength.
Nếu không truyền padString, mặc định là khoảng trắng " ".
const ID = '05';
padStart(4, '0');//0005
padStart(4)//space1space205

8. padEnd(): 
Thêm kí tự vào cuối CHUỖI cho đến khi đạt độ dài chuỗi truyền vào.
Nếu ko truyền padString vào thì mặc định " ".
const price = '12';
padEnd(4, '0');//1200
padEnd(6) //12space1space2space3space4
- Lưu ý:  Lưu ý: padStart()/ padEnd() là phương thức của `String`, không phải `Number`.
  - Nếu đang có số, cần ép kiểu sang chuỗi trước khi dùng.

- Tư duy xử lý Number:
  - Đầu vào hiện tại là text hay number?
    - Nếu là text, cần nghĩ tới việc ép kiểu.
  - Cần ép kiểu nghiêm ngặt hay linh hoạt? `Number()`, `parseInt()`, `parseFloat()`
  - Sau khi thành số rồi, cần tính gì?
    - Cộng, trừ, nhân, chia, `min`, `max`
  - Có cần làm tròn không?
  - Có cần hiển thị đẹp không? `toFixed()`, `padStart()`, `padEnd()`
9. toLocaleString()
Đối tượng áp dụng: Number, Date.
Mục đích: hiển thị số hoặc ngày giờ theo chuẩn văn hóa/ngôn ngữ của từng quốc gia.
không thay đổi kiểu dữ liệu gốc (vẫn là number), nhưng giá trị trả về là một chuỗi string.
Cú pháp:num.toLocaleString([locales[, options]])
- locales: mã ngôn ngữ/vùng miền (ví dụ "vi-VN", "en-US").
- options: đối tượng tùy chọn để định dạng chi tiết (số thập phân, tiền tệ, phần trăm…).
const soTien = 54000000;
console.log(soTien.toLocaleString("vi-VN")+ " VNĐ");
// -> "54.000.000 VNĐ"
console.log(soTien.toLocaleString("en-US"));
// -> "54,000,000"
