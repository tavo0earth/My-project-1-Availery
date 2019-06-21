$(document).ready(function scrollToTop(e) {
    $("#scrollto").on("click", scrollToTop);
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
        e.preventDefault();
    });

var dataForm = document.querySelector('.add-form');
var dataEnter = dataForm.querySelectorAll('.form-control');
dataForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var text = {};
    for (var i = 0; i < dataEnter.length; i++) {
        text.data[i] = dataEnter[i].value;
    }
    console.log(text);

    $.ajax({
        type: "POST",
        data: text,
        url: "index.php",
    });
});



