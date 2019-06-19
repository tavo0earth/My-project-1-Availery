$(document).ready(function scrollToTop(e) {
    $("#scrollto").on("click", scrollToTop);
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
        e.preventDefault();
        return false;
    });
