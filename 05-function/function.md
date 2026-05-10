- Function:
  đầu vào - quy trình xử lý - đầu ra
  phần giống nhau dc gom vào 1 nơi, mỗi lần cần dùng chỉ việc gọi lại.
  tránh lặp lại cùng 1 đoạn code ở nhiều nơi.
  Có 3 loại fucntion trong JS
  
Thành phần cơ bản của hàm:
+Tham số: các biến dc liêtj kê trong đinhj nghĩa hàm
+Đối sô: giá trị thực dc truyền vào
+return: từ khoá trả về giá trị của hàm, nếu ko có thì trả về undefined

1. Function Declaration: hàm tự định nghĩa
function tenHam(thamSo1, thamSo2) {
    // body
    return ...; // có thể có hoặc không
}
- Đặc điểm:
Bắt buộc có từ khóa function và tên hàm → dễ đọc, dễ debug.
Khi lỗi xảy ra, stack trace sẽ hiện tên hàm → dễ xác định vị trí.
Có hỗ trợ hoisting: bạn có thể gọi hàm trước khi định nghĩa.

- Return
Trả về một GIÁ TRỊ từ bên trong hàm cho bên ngoài hàm.
Đồng thời kết thúc hàm ngay tại đó → không chạy các câu lệnh sau.
Giá trị có thể là bất kỳ kiểu dữ liệu: number, boolean, object, array, thậm chí là một hàm khác.
Nơi gọi hàm sẽ nhận lại giá trị đó để gán biến, in ra, hoặc dùng trong tính toán tiếp theo
- Chú ý về console.log
Là một lời gọi hàm để in ra màn hình (side effect).
Không trả về giá trị cho hàm.
Nếu không có return, hàm vẫn chạy và in ra console bình thường, nhưng giá trị trả về mặc định là undefined.
Nếu có return trước đó, mọi console.log sau return sẽ bị bỏ qua.
- Nhược điểm của hàm tự định nghĩa: 
cú pháp dài
có this riêng
có thể ảnh hưởng khi dùng call back 

2. Function expression: Hàm biểu thức 
const tenHam = function(tham số 1, tham số 2){
    //body
}
Khai báo hàm bằng cáchs gắn cho nó 1 biến
Ko hổ trợ hoisting 
Ưu điểm:
+An toàn hơn declaration function vì ko bị overwrite do dc khai biến bằng const
+Linh hoạt hơn: có thể gán hàm cho biến, truyền hàm như đối số, hoặc chọn hàm theo điều kiện
+Chọn hàm theo đk 
Ít dc sdung 
- Chú ý:
 Hàm biểu thức vẫn có thể có tên hàm, nhưng scope thì chỉ tồn tại trong hàm đó, gọn bên 
 ngoaì sẽ lỗi
 const sayHello = function greet() {// tên hàm là greet
  console.log("Hello!");
};
3. Arrow function
Là phiên bản nâng cấp của function expression nhưng ngắn gọn hơn
Hay dc sdung 
// dạng đầy đủ
const tenHam = (thamso1,...) =>{
    //body
}// có dấu {}
//dạng rút gọn
const tenHam= (thamso1,,...)=> body
//bỏ dấu {}
Nhược điểm: ko hổ trợ hoisting
dùng nhiều khi viết call back (.map, filter())
ko có this -> an toàn khi sd với setTimeout, forEach. Lưu ý khi viết object 
ko hiển tên hàm khi debug
=> code mới chỉ sd 2 loại: declaration và arrow thôi 
------
Parametter (tham sô)
-default parametter: tham số mặc định lúc khai báo hàm: khi ko truyền gt tham
số khi gọi hàm thì nó sẽ lấy tham số mặc định.
Tham số mặc định nên viết cuối cùng.
-Nếu tham số giữa bị thiêú, bắt buộc truyền null, undefine để giữ chỗ 
-tham số linh hoạt để mình tự truyền giá trị 
- Rest parameter: gói các paramter vào , dùng ...
Option object:
Gói parameter vào options object sẽ dễ nhìn hơn, tránh nhầm lẫn 

- Hosting
Gọi hàm trc khi nó dc khởi taọ. Nó phụ thuộc vào mình viết hàm kiểu nào, chứ ko phải áp
dụng dc cho tất cả các hàm
- Chỉ có Hàm tự định nghĩa declaretion: có hổ trợ hoisting, hai loại hàm còn lại dùng const nên ko có hoisting
4. Truyền call back
Là truyền 1 hàm vào chỗ khác để nó dc gọi sau
Arrow function là lựa chọn ưu tiên hàng đầu 
-----
Function overloading: 1 hàm nhiều cách gọi (trùng tên nhưng khác tham số)-> Java có hổ trợ.
-> JS ko hổ trợ, hàm sau sẽ ghi đè hàm trc 
5. Các cách gọi hàm
