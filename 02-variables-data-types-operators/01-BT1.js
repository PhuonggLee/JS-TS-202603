//BT1:
//Khai báo biến
const orignalPriceStr = " 1.000.000 đ ";
const discountPercent = 20;
const discountedPriceStr= " 800.000 đ";
//Làm sạch giá gốc và đổi về type number
const originalPrice= parseInt(orignalPriceStr.trim().replaceAll(".",""));
//Làm sạch giá UI
const discountedPriceNum= parseInt(discountedPriceStr.trim().replaceAll(".",""));
console.log(`giá UI ${discountedPriceNum}`);
//Tính giá mong đợi theo logic
const expectedPrice = originalPrice*(100-discountPercent)/100;
console.log(`giá mong đợi ${expectedPrice}`);
//So sánh giá giảm giá theo logic
if (discountedPriceNum===expectedPrice){
    console.log("Correct");
}else{
    console.log("Incorrect");
};
//BT2:
let tenSanPham = "   macbook pro m3  " ;
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";
//Hoa don
console.log("HÓA ĐƠN THANH TOÁN - ID: #0002");
//San Pham
console.log(`Sản phẩm: ${tenSanPham.trim().toUpperCase()}`);
//Don gia
console.log(giaGoc.indexOf("30"));
const donGia = parseInt(giaGoc.slice(7).replaceAll(",",""));
console.log(`Đơn giá ${donGia}`);
//So luong
const tongSoLuong = soLuong.substring(4,5);
console.log(`Số lượng: ${tongSoLuong}`);
//Tong tien goc
const tongTienGoc = donGia*tongSoLuong;
console.log(`Tổng tiền (Gốc): ${tongTienGoc}`);
//Giam gia
const giamGia = maGiamGia.slice(maGiamGia.indexOf(':')+2, maGiamGia.indexOf('%')+1);
console.log(`Giảm giá: ${giamGia}`);
//có thể replace -> trim 
//Thanh tien
const giamGiaNumber = parseInt(giamGia);
const tongTienSauGiamGia = (tongTienGoc/100)*(100-giamGiaNumber);
console.log(`THÀNH TIỀN: ${tongTienSauGiamGia.toLocaleString("vi-VN")+ " VNĐ"}`);



