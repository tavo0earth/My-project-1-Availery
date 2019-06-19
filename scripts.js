$(document).ready(function scrollToTop(e) {
    $("#scrollto").on("click", scrollToTop);
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
        e.preventDefault();
    });

(function() {
    var d = document,
        inp = d.getElementsByClassName('form-control'),
        mas = [];

    function save() {
        for (var i = 0; i < inp.length; i++) {
            mas[i] = inp[i].value;
        }
        console.log(mas);
    }
    save();
})();