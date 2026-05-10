//Closure 
function taoBoDem(tenNut) {
  let soLanClick = 0; // biến private, chỉ tồn tại trong phạm vi hàm

  return {
    click() {
      soLanClick++; // mỗi lần click tăng biến lên 1
      console.log(`${soLanClick} clicks`); // in ra số lần click
    },
    reset() {
      soLanClick = 0; // reset về 0
      console.log("reset Xong"); // thông báo reset
    }
  };
}

const nutLogin = taoBoDem("Login Button"); // tạo một bộ đếm riêng cho nút Login

nutLogin.click();   // lần đầu: soLanClick = 1 → in "1 clicks"
nutLogin.click();   // lần hai: soLanClick = 2 → in "2 clicks"
nutLogin.reset();   // reset về 0 → in "reset Xong"
nutLogin.click();   // sau reset: soLanClick = 1 → in "1 clicks"
//This
const user ={
    hoTen: "neko",
    tuoi:19,
    gioiThieu(){
        //this ở đây là object user
        console.log(`Toi la ${this.hoTen}, ${this.tuoi}`);
    }
}
//khi hoi user.gioiThieu() -> kẻ đứng trc dâu chấm là user -> this là user
console.log(user.gioiThieu());