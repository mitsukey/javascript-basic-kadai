/* 今日の日付を取得 */
const today = new Date();
// console.log(today);

/* 取得情報からそれぞれの要素を取得 */
let year = today.getFullYear();     // 年
let month = today.getMonth() + 1;   // 月
let day = today.getDate();          // 日

console.log(`${year}年${month}月${day}日`);