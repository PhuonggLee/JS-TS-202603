1. while: trong khi ...
while (đk (nằm trong dấu ngoặc tròn)){
// thực thi khối lệnh; 
//bước nhảy tăng lên 
}
yếu tố 1: khởi tạo biến
yếu tố 2: đk lặp (): đánh giá truethy hay falsy
yếu tố 3: bắt buộc nằm trong dấu {}. Nhiệm vị là làm thay đổi biến khởi tạo
-> đến 1 lúc nào đó yếu tố 2 
-> Nếu đk so sánh luôn đúng thì sẽ tạo ra lòng lặp vô tận 
2. Chú ý:
đùng while khi ko biết số lần lắp chỉ biết đk để dừng 
3. Array- mảng: nên cùng kiểu dữ liệu 
-tenMang.length: trả ra number là tổng số phần tử của mảng. vì index bắt đầu bằng = 0
nên phần tử cuối cùng luôn là length-1;
-tenMang.push(giá trị): đầu ra là 
-tenMang.includes()
-tenMang.pop(): lấy ra phần tử cuối cùng của mảng, đầu ra là phần tử cuối cùng 
và làm thay đổi mảng gốc 
-tenMang.shift()
-tenMang.unshift(): thêm phần tử vào đầu mảng, đầu ra là mảng sau khi đã nhét 
-tenMang.join(kí tự nối): gộp tất cả phần tử thầnh 1 chuỗi. KQ trar về là string
-tenMang.indexOf(): 
4. Object: 
dùng array khi có 1 danh sách giống nhau
dùng object khi cần mô tả chi tiết 1 thứ duy nhất 
ex: user thì có email, name, age, address
cú pháp: 
let tenBien = {
    key1: value1,
    key2: value2,
    key3: []
    "key4": value 4 
    "first-name": "Le";// tên key có dấu gạch ngang,or có dấu space
    "my address": "12 Le Do"
}
//Cách truy xuất  đến phấn từ của object:
c1: Ten key ko có dấu space or ko gạch ngang: tenObject.key
c2: tenBien[" ten key" ] // trường hợp key này có dấu gạch ngang or dấu space. Hay dùng trong automation. Khi key dc lưu trong 1 biến khác (dynamic key)
c3: trường hợp key là dc gắn cho 1 biến khác:
...dấu []
// so sánh với json: tránh nhầm 
khai báo json : bắt buộc phải có dấu ngoặc khép cho key

Chú ý:
ko dùng backtick với object, bắt buộc phải dùng dấu phấy để nối chuỗi
Thêm/ xoá phần tử trong object 
+ Thêm: obj.newkey = newvalue hoặc obj["key"] = value.
+ Xóa: delete obj.key hoặc delete obj["key"].

5. Const: ko cho gắn lại , nhưng có thể thay đổi nhân bên trong 
6. Các phương thức của object
-object.keys(): gom tátt cả các key thành 1 mảng
object.hasOwn(tên obcject, "tên key"); kiểu tra tên key có phải của nó hay ko?
mảng lồng mảng? 

Bản chất của automation: xác định vị trí tuong tác -> rồi action 
- Array của object:
7. Vòng lặp for:
- Vòng lặp for cổ điển: dùng nhiều
for (khỏi tạo; đk dừng; bước nhảy){
    //code thực thi
}
khỏi tạo: tạo biến đếm (dùng let, dùng const thì ko thay đổi dc), chỉ chay đúng 1 lần đầu trước khi xét đk và trc khi chạy câu lệnh 
đk dừng: kiển tra trc mỗi vòng, true thì chạy tiếpm false thì dừng luôn
bước nhảy: cập nhận biến sau mỗi vòng, thường là i++, i--
Ba phần này cách nhau bởi dấu chấm phẩy phẩy

