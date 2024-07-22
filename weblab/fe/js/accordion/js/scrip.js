// ページの読み込みが完了したら実行される関数
$(function () {
  // .accordion__item-q 要素がクリックされたときのイベントハンドラを設定
  $(".accordion__item-q").on("click", function () {
    // クリックされた要素の次の要素 (.accordion__item-a) を取得
    var $answer = $(this).next(".accordion__item-a");

    // 現在表示されている他のパネル (.accordion__item-a) を閉じ、アイコンをリセット
    $(".accordion__item-a")
      .not($answer)
      .slideUp()
      .prev(".accordion__item-q")
      .removeClass("open");

    // クリックされた要素に対応するパネルを開閉
    $answer.slideToggle();

    // クリックされた質問要素に 'open' クラスを追加/削除
    $(this).toggleClass("open");
  });
});
