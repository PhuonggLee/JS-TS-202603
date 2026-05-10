let age = 18;
let hasTicket= true;
let canEnterCinema = age>=18 && hasTicket;// nên viết đk thành 1 biến riêng nếu dk dài
//If đơn gian 
if(canEnterCinema){
    console.log("Can enter cinema");
} 
//If nhiều nhánh: nếu đk nào đúng thì chạy đk đó, và dừng check cái đk sau dù các đk sau cũng đúng
//if-else if -else if -else
let loginStatus = "locked";
if (loginStatus==="success"){
    console.log("TEst pass: login thành công");
} else if(loginStatus === "locked"){
console.log("Tài khoản bị khoá");
}else{
    console.log("Undefied");
}
//Toan tu 3 ngoi
let diem = 8;
let trangThai = diem>=5? "PASS": "FAIL";
console.log(trangThai);
//Bt
let failedTest = 2;
let suitTest;
if (failedTest===0){s
    suitTest="PASS";
    console.log(suitTest);
}else if(failedTest <=2){
    suitTest= "Waring";
    console.log(suitTest);
}else{
    suitTest ="Failed";
    console.log(suitTest);
}
//BT: nếu rỗng thì ko hợp lệ
let rawUserName= "   ";//true
if (rawUserName.trim()){
    console.log("hợp lệ");
}else{
    console.log("Ko hợp lệ");
}
//switch case
let role = "admin";// biến ở đây type là gì thì ở switch sẽ truyền vào type đó 
switch(role){
case "admin":// so sánh nghiêm ngoặt ===, ko co dấu ()
    console.log("Cap quyen truy cap");
    break;// beak: dừng lại ko chạy nữa nếu case này đúng, break ko có dấu ()
case "editor":
    console.log("Cap quyen chinh sua");
    break;//nếu ko break thì chạy hết các cases bên dưới , trừ default 
default:
    console.log("Loi truy cap");// các cases ở trên ko đúng thì chạy case default
}
//gom nhóm
let browerName= "firefox";
switch(browerName){
    case "chrome":// sau case ko có dấu ()
    case "edge":
        //gom nhóm
        console.log("Khoi dong brower khac");
    break;//sau break ko có dấu ()
    default:
        console.log("Khoi dong brower firefox");
}