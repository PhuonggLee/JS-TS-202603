Note ghi chú 12 April:
1. Vòng lặp for .. of: duyệt qua mảng/ chuỗi 
for (let value of danh sach){
    code thực thi
}
- Giải thích: 
danhSach phải là iterable (đối tượng có thể lặp), vídụ: array, string, Map, Set…
value là biến mới được tạo ra, và nó sẽ nhận element (giá trị phần tử) của mảng trong mỗi lần lặp, lần lượt từ đầu đến cuối.
Vòng lặp sẽ tiếp tục cho đến khi duyệt hết tất cả phần tử trong mảng.
có thể dùng let, const. var để khai báo cho biến mới 

dùng cho:
- duyệt array đơn giản
- duyệt qua array có phần tử là obj
- Ko dùng dc cho object thuần (plain object), phải biến đổi object thành array để lọc
+ Object.keys():trả về mảng các keys
+ Object.values():trả về mảng các values
+ Object.entries():trả về mảng có các element là mảng các cặp ["key", "value"]

2. for in:
Cú pháp:
for (let key in object) {
    // code thực thi
}
Dùng cho: dành riêng cho object, nên dùng cho object thuần, có thể dùng cho nested obj, ko dùng cho array.
luôn duyệt qua key (tên thuộc tính) mà ko cần biến đổi. trả về string vì typeof key là string
Muốn lấy value thì dùng object[key]// vì key là biến nên dùng [].
Nếu muốn lấy cả key, value thì có thể dùng Object.entries để biến đổi thành array
và dùng for of 
3. Break, continue:
Tât cả các loại vòng lặp đều dùng dc 
break: dừng vòng lặp
continue: bỏ qua code phía dưới trong vòng lặp đó, chạy tiếp vòng lặp tiếp theo
cả hai thường dc dùng trong : for cổ điển, while, for of, for in
ko dùng dc trong for each 
4. Phân biệt cách dùng các loại vòng lặp và đối tương nào dùng loại nào
- Phân biệt:
while: ko biết trc số lần lặp -> lặp đến khi đk sai 
for cổ điển: biết chính xác số lần lặp -> kiểm soát tuyệt đối biên đếm i
có arry, chỉ cần gía trị: for ..of
có array, cân index -> dùng for cổ điển
duyệt object -> dùng for of + biến hình or for in 
- Đối tượng:
Array → chọn for...of (giá trị) hoặc for cổ điển (index).
Object thuần → chọn for...in (keys) hoặc for...of + Object.entries (cặp key-value).
