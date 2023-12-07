/* 変数の初期化 */
let untyped = '';
let typed = '';
let score = 0;

/* 必要なHTML要素の取得 */
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const currentScore = document.getElementById('currentScore');

/* テキストを格納する配列 */
const textLists = [
    'Hello World', 'This is my App', 'How are you?',
    'Today is sunny', 'I love JavaScript!', 'Good morning',
    'I am Japanese', 'Let it be', 'Samurai',
    'Typing Game', 'Information Technology',
    'I want to be a programmer', 'What day is today?',
    'I want to build a web app', 'Nice to meet you',
    'Chrome Firefox Edge Safari', 'machine learning',
    'Brendan Eich', 'John Resig', 'React Vue Angular',
    'Netscape Communications', 'undefined null NaN',
    'Thank you very much', 'Google Apple Facebook Amazon',
    'ECMAScript', 'console.log', 'for while if switch',
    'var let const', 'Windows Mac Linux iOS Android',
    'programming'
];

/* テキストをランダム表示 */
const createText = () => {

    /* 正タイプした文字列をクリア */
    typed = '';
    typedfield.textContent = typed;

    /* 配列のインデックス数からランダムな数値を生成 */
    let random = Math.floor(Math.random() * textLists.length);

    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

/* キー入力の判定 */
const keyPress = e => {

    /* 誤タイプの場合 */
    if (e.key !== untyped.substring(0, 1)) {
        wrap.classList.add('mistyped');
        /* 100ms後に背景色を元に戻す */
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    };

    /* 正タイプの場合 */
    score++;
    wrap.classList.remove('mistyped');
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;
    currentScore.textContent = score;

    /* テキストがなくなったら新しいテキストを表示 */
    if (untyped === '') {
        createText();
    }
};

/* タイピングスキルのランクを判定 */
const rankCheck = score => {

    /* テキストを格納する変数 */
    let text = '';

    /* スコアに応じて異なるメッセージをtextに格納 */
    if (score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if (score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if (score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if (score >= 300) {
        text = `あなたのランクはSです。おめでとうございます！`;
    }

    /* 生成したメッセージと一緒に文字列を返す */
    return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

/* ゲーム終了 */
const gameOver = id => {
    clearInterval(id);


    console.log('ゲーム終了！');
    const result = confirm(rankCheck(score));

    /* OKボタンクリックでリロード */
    if (result == true) {
        window.location.reload();
    }
};

/* カウントダウンタイマー */
const timer = () => {

    /* タイマー部分のHTML要素を取得 */
    let time = count.textContent;

    const id = setInterval(() => {

        /* カウントダウン */
        time--;
        count.textContent = time;

        /* カウントが0になったらタイマー停止 */
        if (time <= 0) {
            gameOver(id);
        }
    }, 1000);
};

/* ゲームスタート時の処理 */
start.addEventListener('click', () => {

    /* 60秒後に「タイムアップ」表示 */
    setTimeout(() => {
        typedfield.style.display = 'none';
        untypedfield.textContent = 'タイムアップ！';
    }, 59999);

    /* カウントダウンタイマー開始 */
    timer();

    /* テキストをランダム表示 */
    createText();

    /* 「スタート」ボタンを非表示 */
    start.style.display = 'none';

    /* キーボードのイベント処理 */
    document.addEventListener('keypress', keyPress);

    /* スコアを表示する */
    currentScore.style.display = 'block';
});

untypedfield.textContent = 'スタートボタンで開始';