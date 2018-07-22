
window.llazy = function(el) {
  el.className += ' llazy-img--show';
  var nextEl = el.nextSibling;
  if (nextEl.className &&
    nextEl.className
      .split(' ')
      .some(function (c) { return c === 'llazy-img--low-res'})) {
    llazy(nextEl);
  }
};