
$(function() {
  $('a').each(function (i, el) {
    var $el = $(el);
    var href = $el.attr('href');

    if (href && href[0] === '#' && href.length > 1 && $(href).get(0)) {
      $el.on('click', function (e) {
        animateScrollTo($(href).get(0));
        e.preventDefault();
      })
    } else if (href && href[0] === '#' && href.length === 1) {
      animateScrollTo(0)
    }
  })
});