// ページの読み込みが完了したら実行される関数
$(function () {
  // 変数に要素を入れる
  var open = $(".modal-open"), // モーダルを開くボタン
    close = $(".modal-close"), // モーダルを閉じるボタン
    container = $(".modal-container"); // モーダルのコンテナ

  // 開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    container.addClass("active"); // モーダルコンテナに 'active' クラスを追加
    return false; // デフォルトのリンク動作を防止
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
    container.removeClass("active"); // モーダルコンテナから 'active' クラスを削除
  });

  // モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on("click", function (e) {
    // クリックされた要素がモーダルの内部でない場合
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active"); // モーダルコンテナから 'active' クラスを削除
    }
  });
});
