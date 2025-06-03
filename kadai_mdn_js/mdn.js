const now = new Date();  
  
const year = now.getFullYear();      // 年を取得するインスタンスメソッド  
const month = now.getMonth() + 1;    // 月は0〜11なので＋1  
const day = now.getDate();            // 日   
  
console.log(`${year}年${month}月${day}日`);  
