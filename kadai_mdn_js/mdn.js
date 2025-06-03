const now = new Date();  
  
const year = now.getFullYear();      // 年を取得するインスタンスメソッド  
const month = now.getMonth() + 1;    // 月は0〜11なので＋1  
const day = now.getDate();            // 日  
const hour = now.getHours();          // 時  
const minute = now.getMinutes();     // 分  
  
console.log(`${year}年${month}月${day}日 ${hour}時${minute}分`);  