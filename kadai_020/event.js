let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});