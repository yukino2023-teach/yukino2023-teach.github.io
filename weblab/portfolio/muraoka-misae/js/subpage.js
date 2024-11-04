// ===================================
// works　production-heading光りながら出現
// ===================================
// アニメーションの制御を行う
function GlowAnimeControl() {
  $(".production__heading").each(function () {
    const elemPos = $(this).offset().top - 50; // 要素の位置（少し上にずらす）
    const scroll = $(window).scrollTop(); // 現在のスクロール位置
    const windowHeight = $(window).height(); // ウィンドウの高さ
    // スクロール位置が要素の位置に達したら
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow"); //クラスを追加
    } else {
      $(this).removeClass("glow"); //そうでなければ削除
    }
  });
}

// テキストにアニメーション用の span タグを追加
function addSpanToText(element) {
  const text = element.text(); // 要素のテキストを取得
  const textbox = text
    .split("")
    .map((t, i) => {
      // テキストを一文字ずつ処理
      const delay = (i / 10 + 2).toFixed(1); // アニメーションの遅延時間を計算
      // スペース以外の文字に span タグを追加
      return t === " "
        ? t
        : `<span style="animation-delay: ${delay}s;">${t}</span>`;
    })
    .join(""); // 文字を結合して新しいHTMLを生成
  element.html(textbox); // 要素のHTMLを更新
}

// スクロールイベントが発生したときに GlowAnimeControl 関数を実行
$(window).on("scroll", GlowAnimeControl);

// ページがロードされたときの処理
$(window).on("load", function () {
  // .production__heading クラスの各要素に対して処理を行う
  $(".production__heading").each(function () {
    addSpanToText($(this)); // テキストに span タグを追加
  });
  GlowAnimeControl(); // 初回実行でアニメーションを適用
});

// ===================================
// works　categoryの固定
// ===================================
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("category-nav");

  if (nav) {
    const navTop = nav.offsetTop - 30; // navの初期位置から30px引いた位置

    window.addEventListener("scroll", function () {
      if (window.scrollY >= navTop) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }
    });
  } else {
    console.error("nav 要素が見つかりません");
  }
});
