AOS.init();
$(function (){
    $('hamburger').on('click', function (){
        $('.sp-nav').fadeToggle();
        $('hamburger').toggleClass('open');
    });
});

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
              $(function(){
                  $('.fadein').each(function(i){
                      $(this).delay(i * 200).queue(function(){
                          $(this).addClass('active');
                      });
                  });
              });
          }
      });
  });
});

//スクロールに応じてヘッダーの背景色が変化
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".header").addClass("is-active");
  } else {
    $(".header").removeClass("is-active");
  }
});

 //ページ内スクロール
$('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

//ページトップへ戻る
var $pageTop = $(".scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

// スマホハンバーガーメニュー ナビゲーションクリックでも消える
$('.hamburger').click(function() {
  $('.sp-nav').fadeToggle();
  $('.hamburger').toggleClass('open');
});
