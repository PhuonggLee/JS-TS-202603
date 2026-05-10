1. Khai báo: 
c1: const array_name = [item1, item2, ...];    
c2: dùng keyword new Array
const cars = new Array ("BWM", "Ferari", "Honda");
- Array có thể chứa: số, chuỗi, object, function, array khác.
Nhưng nên cùng data để khi khai báo
c3: tạo array rỗng rồi thêm phần tử vào
2. Thay đổi element of array
cars[0] = "Xe dap"
console.log(cars);// ra KQ: [ 'Xe dap', 'Ferari', 'Honda' ]
3. Array là 1 dạng đặc biệt của object
console.log(typeof cars) // object
4. Truy cập element của array:
- Dựa vào vị trí index: Array indexes start with 0.
cars[vị trí index]// vd: cars[0] => kết quả trả ra BWN
5. Array element có thể là objects
truy cập:
6. Array method
-tenMang.length: trả ra number là tổng số phần tử của mảng. vì index bắt đầu bằng = 0
nên phần tử cuối cùng luôn là length-1;
-tenMang.push(giá trị): đầu ra là 
-tenMang.includes()
-tenMang.push(item) → thêm 1 element vào vị trí cuối, trả về độ dài mới (data type =Number), làm thay đổi obj gốc
-tenMang.pop() → xóa element ở vị trí cuối, trả về phần tử bị xóa, làm thay đổi obj gốc.
-tenMang.unshift(item) → thêm 1 element ở vị trí đầu, trả về độ dài mới, làm thay đổi obj gốc
-tenMang.shift() → xóa 1 element ở vị trí đầu, trả về phần tử bị xóa, làm thay đổi obj gốc 
-tenMang.join(kí tự nối): gộp tất cả phần tử thầnh 1 chuỗi. KQ trar về là string
-tenMang.indexOf(): 
7. nested array (mảng lồng nhau) 


