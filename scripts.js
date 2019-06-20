$(document).ready(function scrollToTop(e) {
    $("#scrollto").on("click", scrollToTop);
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
        e.preventDefault();
    });

function Complete() {
    var data = [
        document.data.First_Name.value,
        document.data.Last_Name.value,
        document.data.Email.value,
        document.data.Subject.value,
        document.data.Message.value
    ];
    console.log(data);
};

$.ajax({
    type:"POST",
    data: {'name':First_Name,'name':Last_Name,'name':Email,'name':Subject,'name':Message},
    url:"index.php",
});
