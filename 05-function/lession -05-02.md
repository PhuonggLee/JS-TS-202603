Spread operators:
// Bài toán

// Cho dữ liệu đầu vào như sau:

// Cấu hình mặc định của bài tập

const configMacDinhBaiTap = {

  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging

  timeout: 30000, // Thời gian chờ tối đa là 30 giây

  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện

  retries: 2, // Số lần thử lại khi có lỗi

};

// Cấu hình dùng để ghi đè một số giá trị mặc định

const configGhiDe = {

  timeout: 10000,

  headless: false,

};

// Danh sách tag mặc định

const tagsMacDinh = [" smoke  ", "  login "];

// Danh sách tag cần thêm

const tagsThem = ["  check out  ", "  smoke  ", "  regression "];

// Mảng thời gian phản hồi

const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch

const tenSuiteRaw = "  Payment  Flow  ";

// Yêu cầu

// Viết hàm taoCauHinhChayTest().

// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.

// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.

// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.

// - Làm sạch tenSuiteRaw.

// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".

// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.

// - Trả về object có dạng sau:

// Kết quả mong đợi

// {

//   suiteName: "Payment Flow",

//   config: {

//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging

//     timeout: 10000, // Thời gian chờ tối đa là 30 giây

//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện

//     retries: 2,

//   },

//   tags: ["smoke", "login", "checkout", "regression"],

//   slowestRespone: 3400

// }
//Bài giair:
function taoCauHinhChayTest(

    configMacDinhBaiTap,

    configGhiDe,

    tagsMacDinh,

    tagsThem,

    tocDoPhanHoi,

    tenSuiteRaw

) {

    // 1. gộp config

    const configCuoi = {

        ...configMacDinhBaiTap,

        ...configGhiDe

    };

    // 2. gộp tags + xử lý

    const allTags = [...tagsMacDinh, ...tagsThem];

    const tags = [];

    for (let i = 0; i < allTags.length; i++) {

        let tag = allTags[i].trim().toLowerCase();

        if (tag !== "" && !tags.includes(tag)) {

            tags.push(tag);

        }

    }

    // 3. làm sạch tên suite

    const suiteName = tenSuiteRaw.trim() || "unknown-suite";

    // 4. tìm response lớn nhất

    const slowestRespone = Math.max(...tocDoPhanHoi);

    // 5. return kết quả

    return {

        suiteName,

        config: configCuoi,

        tags,

        slowestRespone

    };

}

const result = taoCauHinhChayTest(

    configMacDinhBaiTap,

    configGhiDe,

    tagsMacDinh,

    tagsThem,

    tocDoPhanHoi,

    tenSuiteRaw

);

console.log(result);

2. Hàm callback: gọi lại 
//Array callback mothod
hàm nhân callback có thể trueyenf ngược lại cho hàm callback
- map:biến đổi mảng cũ thành 1 mảng mới
map nhận vào 1 callback function, thường có 3 tham số, nhưng thực tế chỉ dùng 1
đi qua từng phân tử, thực hiện logic
const mangMoi = mangCu.map((phần tử, index, mangGoc)) =>{
    phân tử: phần tưer hiện tai. thường chỉ truyền tham số là phần tử thôi
    index: vị trí index
    return => bắt buộc 
}

- Filter
- Find(): tìm phần tử đầu tiên thoả mảng đk
const 

3. Scope: phạm vị
quy đinh 1 biến dc phép sống và nhìn thấy ở đâu?
A. Global scope: phạm vii toàn cục
- Biến dc khai báo lộ thiên, ko nằm trong bất cứ {} hay function nào.
Bất kì ai, ở đâu trong file code cũng có thể thấy và lấy ra xài.
Nguy hiểm: dễ bị ghi đè do bị gán lại 
B. Function scope
biến dc khai báo bên trong 1 function -> những gì sinh ra trong hàm sẽ 
mất đi khi hàm chạy xong. Bên ngoài ko thấy và sd nó 
- Mỗi lần gọi hàm = tạo scope hàm hoàn toàn mới 
function soSoLan(){
    let count =0;
    count++;
    console.log(count);
}
demSoLan();// count dc tạo mới và tèo
demSoLan()// count lại dc tạo mới và tèo
C. Block scope: pham vi khối
Bất kì thứ gì nào nào trong ngoặc {} của if, for, while đều là block scope
Những gì xảy ra trong {} sẽ ở lại trong đó, bên ngoài ko sd dc.
- var: ko tuân theo block scope => ko dc dùng nhé 
- Chú ý:
Object ko phải là block scope.
Object ko tạo ra scope
scope chain: xác định scope -> tìm từ trong ra ngoài
Ham con nhìn thấy biến của hàm cha và bên ngoài hàm luôn (global) nhưng hàm cha ko nhìn thấy biến của hàm con
