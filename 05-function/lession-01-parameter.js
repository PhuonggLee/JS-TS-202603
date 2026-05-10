//Default Parameter
//lấy giá trị mặc định của tham số nếu không truyền đối số 
//hoặc truyền undefined.
function totalClass( class1,class2, class3 =25){
let result= class1 + class2+ class3;
return result;
}
console.log(totalClass(10,20));
console.log(totalClass(20,30,undefined));//75. 
//Rest parameter
function tongTienHang (...danhSachGia){
    ///danhSachGia là 1 mảng
    let tong = 0;
    for (let gia of danhSachGia){//for of lọc qua giá trị elêment of array
        tong += gia;// tong = tong + gia
    }
    return danhSachGia;
}
console.log(tongTienHang(25,5,10,15));// trả về 1 mảng 

