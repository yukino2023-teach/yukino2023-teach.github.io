document.addEventListener("DOMContentLoaded", () => {
  // アニメーションを適用するテキスト要素を取得
  const textElement = document.getElementById("animated-text");
  // テキスト要素の内容を取得して保存
  const textContent = textElement.innerHTML;
  // テキスト要素の内容を一旦空にする
  textElement.innerHTML = "";

  // アニメーションの遅延時間を初期化
  let delay = 20;

  const words = textContent.split(/(\s+|\<.*?\>)/); // タグやスペースで分割

  // 分割された各部分（単語、タグ、スペース）を処理するループ
  words.forEach((word) => {
    // 文字列がタグ（例：<br>や<div>）の場合
    if (word.startsWith("<") && word.endsWith(">")) {
      textElement.innerHTML += word; // タグをそのまま追加
      // 文字列がスペースの場合
    } else if (word.trim() === "") {
      textElement.innerHTML += word; // スペースをそのまま追加
      // それ以外の文字列（単語）の場合
    } else {
      // 単語全体をラップするコンテナを作成
      const wordContainer = document.createElement("span");
      // 単語の途中で改行されないようにする
      wordContainer.style.whiteSpace = "nowrap";

      // 単語を1文字ずつ処理するループ
      word.split("").forEach((char) => {
        // 新しい<span>要素を作成
        const span = document.createElement("span");
        // span要素にクラスを追加
        span.className = "char";
        // アニメーションの遅延時間を設定
        span.style.animationDelay = `${delay * 0.1}s`;
        // span要素に文字を追加
        span.textContent = char;
        // span要素を単語コンテナに追加
        wordContainer.appendChild(span);
        // 次の文字のために遅延時間を増加
        delay++;
      });

      // 単語コンテナをテキスト要素に追加
      textElement.appendChild(wordContainer);
    }
  });
});
//----------------------------------------
//skillのsectionの時だけボタン色変更
// ---------------------------------------
// hamburger menu(Skills-sectionの時だけボタン変色)
// ---------------------------------------
// ウィンドウがスクロールされるたびに、この関数が呼び出されます。
window.addEventListener("scroll", function () {
  // `js-skills` というIDを持つセクションを取得
  const section = document.getElementById("js-skills");
  // ハンバーガーメニューのボタンを取得
  const button = document.getElementById("js-burger-menu");

  // セクションの位置と大きさを取得
  const sectionRect = section.getBoundingClientRect();

  // ハンバーガーメニューの位置と大きさを取得
  const buttonRect = button.getBoundingClientRect();

  // ハンバーガーメニューの位置がセクションの上下端の間にあるかどうかを確認
  const inView =
    sectionRect.top <= buttonRect.top &&
    sectionRect.bottom >= buttonRect.bottom;

  // セクションの中にハンバーガーメニューがある場合、ボタンに `change-color` クラスを追加
  if (inView) {
    button.classList.add("change-color");
  } else {
    // セクションの中にハンバーガーメニューがない場合、ボタンから `change-color` クラスを削除
    button.classList.remove("change-color");
  }
});

// ===============================================
// introduction__textふんわり出現
// ===============================================
document.addEventListener("DOMContentLoaded", function () {
  const introTexts = document.querySelectorAll(".introduction__text");

  const observerOptions = {
    root: null, // ビューポートを使用
    rootMargin: "0px",
    threshold: 1.0, // 完全に画面内に入ったときにトリガーされる
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  introTexts.forEach((text) => {
    observer.observe(text);
  });
});
