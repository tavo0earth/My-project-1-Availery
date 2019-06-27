var sendContacts = function (evt) {
    //функция клика
    evt.preventDefault();
    //отмена стандартного действия
    var data = {};
    //задали объект
    var fieldNames = ["firstName", "lastName", "email", "subject", "message"];
    //задали название полей

    //допустим берем 1-е поле и оно заполненное
    fieldNames.forEach((fieldName) => {
        //на fieldNames открываем цикл перебирания массивов
        //fieldName ты указал как название очередного массива или название фукнции?
        var field = $(`[name=${fieldName}]`);
        //здесь присвоили field значение элемента имеющего в name название 1-го поля, так?
        //а почему скобки вокруг fieldName {} а не []???
        var isValid = validateField(field);
        //здесь переменной присваивается результат функции, а так же передается в нее значение field
        if (isValid) {
            //здесь проверяется полученное значение true ли?
        }
        data[fieldName] = field.val();
        //если да, то пишем в data текст .val() в field
        //почему скобки массивные, а не объектные? data ж должна быть передана в объекте?
    }
});

var validateField = function (field) {
    //тут мы полуяили значение field
    field.parent().find('.error').remove();
    //тут мы в родителе field выводим error и удаляем, так?
    var value = field.val();
    //присваиваем переменной текст поля
    if (!value) {
        //проверка на наличие текста
        field.parent().prepend("<div class='error'>Cannot be blank</div>");
        //если нет текста, то в родитель field над ним добавляется это вложение
        //и тут вопрос, почему в prepend то вложение без &()???
        return false;
        //вывод false, что в итоге не добавит поле в data
    } else {
        return true;
        //вывод true, что в итоге добавит поле в data
    }
};