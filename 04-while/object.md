- Định nghĩa: Object: 
dùng array khi có 1 danh sách giống nhau
dùng object khi cần mô tả chi tiết 1 thứ duy nhất 
ex: user thì có email, name, age, address
1. Tạo object:
+ c1: khai bao trực tiếp
let tenBien = {
    key1: value1,//Cặp key–value là Property, nghĩa là thuộc tính
    //Key = tên thuộc tính
    //Value = giá trị thuộc tính
    key2: value2,
    key3: []
    key4: value 4 
    "first-name": "Le";// key có dấu gạch ngang
    "my address": "12 Le Do"// có dấu space
}
+ c2: dùng keyword: new Object();
const person = new Object();
person.name = "An";
person.age = 20;
+ Chú ý:
Object còn có thể chứa methods (hàm được lưu dưới dạng value).
2.  Cách truy xuất  đến phấn từ của object:
c1: Dùng dấu chấm: obj_name.key
c2: Dùng ["key"]: 
obj_name[" ten key"] // trường hợp key này có dấu gạch ngang or dấu space.
c3:Dùng []:
Dynamic key = key được lưu trong biến.
Khi gán key cho biến, bạn phải viết dưới dạng chuỗi "...".
Khi truy cập bằng biến, dùng cú pháp obj[dynamic key name].
// so sánh với json: tránh nhầm 
khai báo json : bắt buộc phải có dấu ngoặc khép cho key
Chú ý:
ko dùng backtick với object, bắt buộc phải dùng dấu phấy để nối chuỗi
3. Thêm/ xoá phần tử trong object 
+ Thêm: obj.newkey = newvalue hoặc obj["key"] = value.
+ Xóa: delete obj.key hoặc delete obj["key"].
4. Nested object
Truy cập bằng cách nối nhiều cấp: obj.level1.level2.key
5. Object chứa array
Dùng obj.arrayName[index] để lấy phần tử trong array.
Nếu array chứa object → obj.arrayName[index].key
6. Các phương thức của object
- Truy xuất dữ liệu
Object.keys(objName) → trả về mảng các key.
Object.values(objName) → trả về mảng các value.
Object.entries(objName) → trả về mảng các cặp [key1, value1], [key2, value2],..
- Kiểm tra obj có key đó ko?
Object.hasOwn(objName, "key") // trả về boolean: true or false
