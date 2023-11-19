holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

/* for文の場合 */
for (let index = 0; index < holidays.length; index++) {
    console.log(holidays[index]);
}

/* while文の場合 */
let num = holidays.length;
let index = 0;
console.log(num);

while (index < num) {
    console.log(holidays[index]);
    index++;
}