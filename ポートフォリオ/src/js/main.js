"use strict";

$(function () {
  /*---------- ハンバーガーメニュー ----------*/
  const hamburger = $(".js_hamburger");
  const navigation = $(".js_navigation");

  hamburger.on("click", function () {
    $(this).toggleClass("is_active");
    navigation.toggleClass("is_active");
    $(".js_body").toggleClass("is_active");
  });




const mySwiper = new Swiper('.swiper', {
    loop: true,  // 無限ループさせる
    speed: 1000,
    effect:'fade',
    autoplay: { // 自動再生させる
      delay: 4000, // 次のスライドに切り替わるまでの時間（ミリ秒）
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
      waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },
  })


  $(function () {
    $(".js-pagetop").on("click",function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $('.js-pagetop').fadeIn(300).css('display', 'flex')
      } else {
        $('.js-pagetop').fadeOut(300)
      }
    });
  });



  (function() {
  const fh = document.getElementById('fixed-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
}());

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});


})
