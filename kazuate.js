// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let a = document.querySelector('#print');
a.addEventListener('click', hantei);

function hantei() {
    let i = document.querySelector('input[name="yosou"]');
    let yoso = Number(i.value);
}
  // 課題3-1: 正解判定する
  kaisu++;
  if (kaisu>3) {
    let result = document.querySelector('p#result');
    result.textContent('答えは' + kotae + 'でした. すでにゲームは終わっています.');
  } else {
    let a = document.querySelector('span#kaisu');
    a.textContent(kaisu + '回目の予想:' + yoso)
 if (yoso===kotae) {
    let result = document.querySelector('p#result');
    result.textContent('正解です.おめでとう!');
 } else if (yoso>=kotae) {
  let result = document.querySelector('p#result');
  result.textContent('まちがい.答えはもっと小さいですよ');
 } else if (yoso <=kotae) {
  let result = document.querySelector('p#result');
  result.textContent('まちがい.答えはもっと大きいですよ');
 }
}
