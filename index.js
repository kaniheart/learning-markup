;(function () {
  window.addEventListener('scroll', handleWindowScroll);

  function handleWindowScroll() {
    const $backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
      $backToTop.classList.add('visible');
    } else {
      $backToTop.classList.remove('visible');
    }
  }

  // ページトップクリック
  $('#back-to-top a').click(function() {
    // ページトップへスクロール
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
})();
