//Скролл кнопки
function scrollToTop(e) {
    e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
    };

//Валидация
var contacts = document.querySelector('.table');
var fields = contacts.querySelectorAll('.form-control');
var xxx = contacts.querySelectorAll('.xxx');

//1 - Обработчик кнопки
$('#send').click(function(evt) {
    evt.preventDefault();

    sendContacts();

    oneError();

    checkVoids();
});

//2 -Функция добавления классов про ошибки, вывод error
var checkError = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
};

//3 -Принятие error, проверка пустоты ячеек и применение к ним error
var checkVoids = function () {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            var error = checkError ('Cannot be blank');
            xxx[i].insertBefore(error, fields[i]);
        };
    };
};

//4 - Отмена повтора кода error
var oneError = function () {
    var errors = contacts.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    };
};

//5 - Сбор данных и отправка на сервер
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

$("#scrollto").on("click", scrollToTop);

//Разворачивание ячейки
var cell = document.querySelectorAll('.faq_icon');

$('.onetextbutton').click(function() {
    cellText();
});

//1 -Функция добавления классов разворачивания
var cellText = function () {
    var text = document.createElement('div');
    text.className = 'dropdown-menu';
    text.innerHTML = textInCell;
    for (var i = 0; i < cell.length; i++) {
        cell[i].appendChild(text);
    };
};

var textInCell = 'Praesent in purus tortor. Integer id auque ultricies, porta dolor quis, accumsan est.\n' +
    'Pellentesque facilisis vehicula consequat. Nam magna justo, suscript id libero ac, vulputate\n' +
    'convallis nisi. Sed sagittis, nisi in pharetra bibendum, orci augue sollicitudin mauris, eu\n' +
    'commodo magna risus a lorem. Sed dui ex, malesuada et velit et, rhoncus maximus est. Mauris\n' +
    'tempus sagittis massa nec consectetur.';