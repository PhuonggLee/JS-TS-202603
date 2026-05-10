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
