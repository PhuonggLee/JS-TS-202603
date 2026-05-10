let rawProjectName = "   Neko CRM   ";    
let rawEnvName = "   ";    
let rawPassRate = "82";    
let rawHasReport = "true";    
let rawCriticalMessage = "   ";    
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"  
//1. Dùng .trim() để làm sạch rawProjectName và rawEnvName.    
//2. Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
let projectName = rawProjectName.trim();
let envName = rawEnvName.trim()===""?"Development":rawEnvName.trim();
//3. Ép rawPassRate sang Number.    
let passRate = Number(rawPassRate.trim());//nên console.log(Number.isNaN(passRate))để check ép kiểu thành công chưa
//4. Ép rawHasReport sang Boolean đúng cách.    
let hasReport = rawHasReport.trim()==="true";
//5. Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
let hasCriticalBug;
if (rawCriticalMessage===null ||rawCriticalMessage === undefined){// null phải viết thường
  hasCriticalBug=false;
}else if(rawCriticalMessage.trim() ===""){
  hasCriticalBug =false;
}else{
hasCriticalBug =true;
}

//6. Dùng if / else if để xếp hạng:    
//>= 95 -> "EXCELLENT"    
//>= 80 -> "GOOD"    
//>= 60 -> "NEEDS IMPROVEMENT"    
//còn lại -> "CRITICAL"   
let grade;
if (passRate >=95){
    grade ="EXCELLENT";
} else if (passRate >=80){
    grade ="GOOD";
} else if(passRate>=60){
    grade = "NEEDS IMPROVEMENT";
} else{
    grade ="CRITICAL";
};
//7. Dùng switch/case để gán tên engine cho browserUsed:    
//chrome -> "Chromium"    
//edge -> "Chromium"    
//firefox -> "Gecko"    
//safari -> "WebKit"    
//Nếu không khớp -> "Unknown"    
let engine;
switch (browserUsed){
  case "chrome":
 case "edge":
  engine= "Chromium";
   break;
 case "firefox":
  engine="Gecko";
   break;
 case "safari":
  engine= "WebKit";
   break;
 default:
  engine ="Unknown";
}
;//Dùng toán tử 3 ngôi để tạo message cho report:    
//nếu hasReport là true -> "Có report"    
//ngược lại -> "Chưa có report"    
let report = hasReport? "Có report":"Chưa có report";
// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
let isReadyToRelease;
if (passRate <80|| hasCriticalBug===true ||report ==="Chưa có report"){
  isReadyToRelease  = false;
} else{
  isReadyToRelease  = true;
};
//In báo cáo ra console
// Expected output	
// Project:         Neko CRM	
// Environment:     Development	
// Browser:         chrome	
// Engine:          Chromium	
	
// Pass Rate:       82.00%	
// Grade:           GOOD	
// Report:          Có report	
// Critical Bug:    Không có bug nghiêm trọng	
	
// Ready:           YES	
console.log(`Project: ${projectName}`);
console.log(`Environment: ${envName}`);
console.log(`Browser: ${browserUsed}`);
console.log(`Engine: ${engine}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Grade: ${grade.toUpperCase()}`);
console.log(`Report: ${report}`);
console.log(`Critical Bug: ${hasCriticalBug? "Có bug nghiêm trọng": "Không có bug nghiêm trọng"}`);
console.log(`Ready: ${isReadyToRelease?"YES": "NO"}`);


