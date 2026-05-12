Commit: lưu lại lịch sử: who, when, why
Các khu vực quan trọng
- Working directory:folder project trên máy
git add 
- Staging area: vùng chuẩn bị commit -> nơi bạn chọn file nào sẽ commit tiếp theo
git commit
- Local repository: folder.git trên máy -> nơi lưu lịch commit local
git.push
- Remote repository: github/ gitlab/ bitbucket-> nơi lưu bản online 
Các bước để đẩy code trê remote
b1: khỏi tạo git trong folder hiện git init
-> làm lần dâud tiên và duy nhất -> sau lệnh này git sẽ tạo ra 1 folder ânr tên là .git
=> khỏi tạo xong: Initialized empty Git repository (lĩchj sử đang rổngx vì chưa commit lần nào).
b2: kiểm tra trang thái file 
git status
No commits yet -> git đã dc bât trong folder nhưng chưa tạo dc mốc lưu đâù tiên.
b3: git add tên file (or tên folder)
git add . => chọn tất cả cá files đang thay đổi trong project 
b4: tạo commit đầu tiên 
git commit - m "nôi dung mô tả commit".
b5: đặt tên nhánh chính là main
git branch -M main
b7: push đẩy code
git push -u origin main
u chính là upstream 
---
Cách đặt tên commit:
+V-Nội dung thay đổi
eg: add login test, remove role
+Type- nôi dun thay đổi
eg: docs-update git lession, feat-add product search
---
# Flow làm việc với nhánh phụ trong Git/GitHub
1. Kiểm tra trạng thái và nhánh hiện tại
git status // trạng thái đồng bộ commit vs remote: 
//Báo bạn có “up to date”, “ahead” (đi trước vài commit), “behind” (chậm vài commit),
//hay“diverged” (lệch nhau).
git branch
2. Đồng bộ main local với remote main
git checkout main
git pull
3. Tạo hoặc chuyển sang nhánh phụ
# Nếu nhánh chưa có:
git checkout -b feature/login
# Nếu nhánh đã tồn tại:
git checkout feature/login
4. Làm việc trên nhánh phụ
git add .
git commit -m "message commit"
5. Trước khi push, kiểm tra nhánh phụ và remote main đã đồng bộ chưa
git checkout main
git pull                # cập nhật main local từ remote main
git checkout feature/login
git merge main          # đồng bộ code mới nhất từ main vào nhánh phụ
6. Push nhánh phụ lên remote
git push -u origin feature/login   # lần đầu
git push                           # các lần sau
7. Sau khi có thay đổi mới từ người khác trên remote main
git checkout main
git pull                # đồng bộ lại main local
git checkout feature/login
git merge main          # cập nhật nhánh phụ với main mới nhất
8. Tiếp tục code trên nhánh phụ

**Nguyên tắc:**
-Main local ↔ Remote main luôn phải khớp.
-Trước khi push nhánh phụ, luôn merge main vào nhánh phụ để đảm bảo nền tảng mới nhất.
-Sau khi PR được merge vào remote main, quay lại local main, pull về, rồi tiếp tục tạo nhánh phụ mới hoặc cập nhật nhánh phụ cũ.






