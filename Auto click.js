//inspect element
var i = 0; var limit = 1000000; function win () { setTimeout(function () { document.getElementById('bigCookie').click(); i++; if (i < limit) { win(); } }, 5)} win();
