//Скролл кнопки
function scrollToTop(e) {
    e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
    };

$("#scrollto").on("click", scrollToTop);

//Валидация + отправка данных
//1 - Обработчик кнопки
$('#send').click(function(evt) {
    evt.preventDefault();

    sendContacts();

    checkVoids();
});

//2 - Проверка пустоты ячеек и применение к ним error
var checkVoids = function () {
var fieldsCell = $('.form-control').val();

    $(".error").remove();

    if (!fieldsCell.value) {
        $("<div class='error'>Cannot be blank</div>")
            .css("color", "red")
            .prependTo(".fields");
    };
};

//3 - Сбор данных и отправка на сервер
var sendContacts = function () {
    var firstName = $('[name="firstName"]').val();
    var lastName = $('[name="lastName"]').val();
    var email = $('[name="email"]').val();
    var subject = $('[name="subject"]').val();
    var message = $('[name="message"]').val();

    var data = {firstName, lastName, email, subject, message};
    console.log(data);

    $.ajax({
        type: "POST",
        data: {},
        url: "index.php"
    });
};

//Разворачивание ячейки

$('.onetextbutton').click(function() {
    $("<div class='dropdown-menu'>" +
        "'Praesent in purus tortor. Integer id auque ultricies, porta dolor quis, accumsan est.\\n' +\n" +
        "    'Pellentesque facilisis vehicula consequat. Nam magna justo, suscript id libero ac, vulputate\\n' +\n" +
        "    'convallis nisi. Sed sagittis, nisi in pharetra bibendum, orci augue sollicitudin mauris, eu\\n' +\n" +
        "    'commodo magna risus a lorem. Sed dui ex, malesuada et velit et, rhoncus maximus est. Mauris\\n' +\n" +
        "    'tempus sagittis massa nec consectetur.';" +
        "</div>"
        ).appendTo(".faq_icon");
});