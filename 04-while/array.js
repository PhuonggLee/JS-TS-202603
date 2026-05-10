//1. Khai báo array
// khai báo trụcư tiếp
const cars = new Array ("BWM", "Ferari", "Honda");
const colorName = ["blue", "red", "white", 1, null]// elements của array có thể thuộc
// nhiều loại data type nhưng khuyến khích cùng loại
// c2: dùng keyword để khởi tạo. Dùng dấu ngoặc () -> ít xài
const myClass = new Array("12A1", "12C3", "12A5");
//c3: tạo array rỗng rồi thêm phần tử vào
const emptyArray = [];
emptyArray[0] = "banana";
emptyArray[1] ="apple";
//2. typeof array_name trả về object
console.log(typeof cars) // object
//Truy cập và thay đổi phần tử:
console.log(cars[0]);//BWN
cars[1] ="Yamaha";// update giá trị của vị trí index 1 thành "Yamaha"
console.log(cars);// trả về [ 'BWM', 'Yamaha', 'Honda' ]
//Mảng chưa nhiều objects
const students = [
    { name: "An", age: 20, major: "IT" },// element 1
    { name: "Bình", age: 22, major: "Economics" },//element 2
    { name: "Chi", age: 21, major: "Design" }
];
// Truy cập mảng nhiều object: qua index và key
console.log( students[0].age);// 20

