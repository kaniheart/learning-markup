;(function () {
  function handleWindowScroll() {
    const $backToTop = document.getElementById('back-to-top');
    // スクロール位置が２５０を超えたら表示される
    if (window.scrollY > 250) {
      $backToTop.classList.add('visible');
    } else {
      $backToTop.classList.remove('visible');
    }
  }

  function fixSideMenu() {
    const $sidebar = document.getElementById('sidebar');
    const $menu = document.getElementById('menu');

    if (window.scrollY > $sidebar.offsetTop) {
      $menu.classList.add('js-fixed-menu');
    } else {
      $menu.classList.remove('js-fixed-menu');
    }
  }

  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  window.addEventListener('scroll', fixSideMenu, { passive: true });

  /*
  // ページトップクリック
  $('#back-to-top a').click(function() {
    // ページトップへスクロール
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
  */
})();
