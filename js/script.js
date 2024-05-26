$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".l-drawer-menu__logo, .l-drawer-menu__items, .l-drawer-menu__links").toggleClass("is-active");
    $(".circle-bg").toggleClass('circleactive');
    $(".js-drawer").fadeToggle(800);
    $(".js-fade").fadeToggle(300);
  });

  // ドロワー内のリンクをクリックしたときにドロワーを閉じる
  $(".js-drawer, .js-drawer").click(function() {
    $(".js-hamburger").removeClass("is-active");
    $(".l-drawer-menu__logo, .l-drawer-menu__items, .l-drawer-menu__links").removeClass(is-active);
    $(".circle-bg").removeClass('circleactive');
    $(".js-drawer").fadeOut(800);
  });
});

//スライド
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  direction: "vertical",
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  }
});

//文字数制限(TOPページ)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".txt-limit");
  const len = 24;

  elements.forEach(limit => {
    const str = limit.textContent.trim();
    if (str.length > len) {
      limit.textContent = str.substring(0, len) + "…";
    }
  });
});


// News一覧の文字数制限
const elements2 = document.querySelectorAll(".txt-limit2");

function updateNewsTextLimit() {
    const maxLen = window.matchMedia("(max-width: 768px)").matches ? 40 : 46;

    elements2.forEach(limit => {
        const str = limit.dataset.originalText || limit.textContent;
        limit.dataset.originalText = str;
        if (str.length > maxLen) {
            limit.textContent = str.substring(0, maxLen) + "…";
        } else {
            limit.textContent = str;
        }
    });
}

updateNewsTextLimit();
window.addEventListener('resize', updateNewsTextLimit);

// Works一覧の文字数制限
const elements3 = document.querySelectorAll(".txt-limit3");

function updateWorksTextLimit() {
    const maxLen = window.matchMedia("(max-width: 768px)").matches ? 24 : 46;

    elements3.forEach(limit => {
        const str = limit.dataset.originalText || limit.textContent;
        limit.dataset.originalText = str;
        if (str.length > maxLen) {
            limit.textContent = str.substring(0, maxLen) + "…";
        } else {
            limit.textContent = str;
        }
    });
}

updateWorksTextLimit();
window.addEventListener('resize', updateWorksTextLimit);

//スクロールアニメーション
document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    }
  }

  const _inviewAnimation = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }
  new ScrollObserver('.c-text-slidein', cb);
  new ScrollObserver('.c-fade-up', _inviewAnimation);
});

