(function () {
  var header = document.querySelector('.dr-header');
  if (!header) return;

  var burger = header.querySelector('.dr-header-burger');
  var nav = header.querySelector('.dr-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    if (!expanded) {
      nav.classList.add('dr-header-nav-open');
    } else {
      nav.classList.remove('dr-header-nav-open');
    }
  });
})();