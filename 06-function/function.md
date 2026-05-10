Closure
1 hàm ghi nhớ các biến xung quanh nơi nó sinh ra và gôm vào
1 balo sau này bi mang đi chạy ở nơi khác
-3 dấu hiệu chính:
+hàm lồn trong hàm (Hàm con nằm trong hàm cha)
+ham con sd biến của hàm cha
+hàm con chạy nó vẫn truy cập dc biến của hàm cha
Chỉ giữ quyền truy cập , ko sao chép object 
- This
Giống đại từ nhân xưng tôi trong đời sống
Giá trị của nó phụ thuộc vào ai là ng gọi nó
this.trong obj
A. quy tắc vàng: kẻ đungứ trước dấu chấm = this 
B. Các nhận dạng
-Gọi qua object (object.ham()) => this trở về đúng objec
gọn hàm khơi khơi (ham()) -> this = undefined
arrow function ko kế thừa -> this = global
callback cũng là gọi khơi khơi nên ko dùng this 
. This sẽ bị mất khi truyền fallback 

