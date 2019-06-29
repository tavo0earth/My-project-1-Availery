//Скролл кнопки
function scrollToTop(e) {
    e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
    };



//2 - Проверка пустоты ячеек и применение к ним error
// Функция принимает селектор, проверяет есть ли в нем value, и в случае отсутствия добавляет блок с ошибкой
// Результат функции: true - поле валидно, false - нет
var validateField = function (field) {
    // Удаление предидущей ошибки, в случае если она была
    field.parent().find('.error').remove();
    var value = field.val();
    if (!value) {
        field.parent().prepend("<div class='error'>Cannot be blank</div>");
        return false;
    } else {
        return true;
    }
};

//3 - Сбор данных, валидация и отправка на сервер
var sendContacts = function (evt) {
    evt.preventDefault();
    var data = {};
    // Описываем перечень полей
    var fieldNames = ["firstName", "lastName", "email", "subject", "message"];
    // Итерируем по названиям полей и запускаем на каждом из них валидацию
    fieldNames.forEach((fieldName) => {
        var field = $(`[name=${fieldName}]`);
        var isValid = validateField(field);
        // Если поле валидно пишем его в обьект data
        if (isValid) {
            data[fieldName] = field.val();
        }
    });

     // Проверяем если ключей в обьекте data 5, т.е. есть все поля, отправляем запрос
    if (Object.keys(data).length === 5) {
        $.ajax({
            type: "POST",
            data,
            url: "index.php"
        });
    }
};

//Разворачивание ячейки
function onFaqClick(event) {
    var element = event.target;
    element = $(element).parent().find('.expandable_cell');
    if (element.css('display') === "none") {
        element.show();
    } else {
        element.hide();
    }
}

google.maps.event.addDomListener(window, 'load', init);
function init() {

    var myOptions = {
        center: new google.maps.LatLng(-33.8929649, 150.9710716), // Координаты, какое место отображать на карте
        zoom: 9, // Уровень риближения карты
        mapTypeId: google.maps.MapTypeId.ROADMAP // Тип карты

    };
    var map = new google.maps.Map(document.getElementById("map"), // В каком блоке будет отображаться карта
        myOptions);
}

// Обработчики событий
$("#scrollto").on("click", scrollToTop);
$('#send').on('click', sendContacts);
$('.clickFaq').on('click', onFaqClick);
