- Parameter (thiết kế hàm): default, rest, destructuring, options object 

1. Default parameter
lấy giá trị mặc định của tham số nếu không truyền đối số hoặc truyền undefined.
Nếu truyền thiếu số lượng tham số thì phải truyền undefined để giữ chỗ cho nó
Ưu điểm: tránh lỗi khi thiếu tham số, giúp hàm an toàn hơn.
Nếu nhiều hơn 3 tham số thì có thể dùng option object.
2. Rest parameter
cho phép một hàm nhận một số lượng đối số (arguments) không xác định và gom nhóm chúng lại thành một mảng (Array) thực sự
+Một hàm chỉ được phép có tối đa một ...rest.
+Rest parameter bắt buộc phải đặt ở vị trí cuối cùng trong danh sách tham số. Nếu đặt sai, JavaScript sẽ báo lỗi.
+Nếu không có đối số nào truyền vào cho rest → nó sẽ là mảng rỗng []
+Thường dùng trong các tình huống như tính tổng, nối chuỗi, xử lý danh sách.
+Rest parameter là mảng thật sự, có thể dùng .map(), .filter(), .reduce()
3. options object:
-Gom các tham số (thường thì nhiều hơn 3) là thành 1 object.
Có 2 cách viết phổ biến
- 








