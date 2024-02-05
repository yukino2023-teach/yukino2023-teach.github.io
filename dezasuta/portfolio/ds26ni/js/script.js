$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.accordion1,.accordion2,.accordion3,.accordion4,.accordion5,.accordion6,.accordion7').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });


  $(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.accordion0,.accordion1,.accordion2,.accordion3,.accordion4,.accordion5,.accordion6,.accordion7').click(function () {
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
        $('.dli-plus').toggleClass("open");

        $('.close').click(function () {
            $(this).closest('.accordion_inner').slideUp();
            $(this).removeClass("open");
            $('.dli-plus').removeClass("open");
        });
    });
});