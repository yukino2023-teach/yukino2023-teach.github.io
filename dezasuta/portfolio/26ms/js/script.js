AOS.init();

window.addEventListener("scroll", (e) => {
  humanFix("js-heartTrigger");
});
// humanFix
// ------------------------------------------------------------
function humanFix(Class) {
  const targetsClass = document.getElementsByClassName(Class);
  const targetsArr = Array.from(targetsClass);
  const windowHeight = window.innerHeight;

  targetsArr.forEach(function (target) {
    const targetClass01 = document.getElementsByClassName(
      target.getAttribute("data-Class01")
    )[0];
    const targetClass02 = document.getElementsByClassName(
      target.getAttribute("data-Class02")
    )[0];
    let targetRelative = target.getBoundingClientRect().top;
    let scale =
      window.innerWidth >= 768
        ? 1 + -0.008 * targetRelative
        : 1 + -0.008 * targetRelative;

    if (scale >= 1) {
      targetClass01.style.position = "fixed";
      targetClass02.style.transform = "scale(" + scale + ")";
    } else {
      targetClass01.style.position = "absolute";
      targetClass02.style.transform = "scale(1)";
    }
  });
}
AOS.init();

$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

 // スマホハンバーガーメニュー ナビゲーションクリックでも消える
 $('.hamburger').click(function() {
  $('.header_nav-sp').fadeToggle();
  $('.hamburger, .hamburger-white').toggleClass('open');
});
$(".header_nav-sp").click(function () {
  $('.header_nav-sp').fadeToggle();
  $(".hamburger").removeClass("open");
});
