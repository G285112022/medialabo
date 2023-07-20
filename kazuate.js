// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let Eve = document.querySelector('button#kaitou');
Eve.addEventListener('click', hantei);

// 入力回数（予想回数）
let kaisu = 0;

function hantei() {
    let i = document.querySelector('input[name="suuji"]');
    let yoso = Number(i.value);

  // 課題3-1: 正解判定する
  kaisu++;
  if (kaisu>3) {
    let result = document.querySelector('p#result');
    result.textContent = '答えは' + kotae + 'でした. すでにゲームは終わっています.';

  } else {
    let p = document.querySelector('p');
    p.textContent = kaisu + '回目の予想:' + yoso;
 if (kotae===yoso) {
    let result = document.querySelector('p#result');
    result.textContent = '正解です.おめでとう!';
 } else if (kotae>=yoso) {
  let result = document.querySelector('p#result');
  result.textContent = 'まちがい.答えはもっと大きいですよ';
 } else {
  let result = document.querySelector('p#result');
  result.textContent = 'まちがい.答えはもっと小さいですよ';
 }
}
}
