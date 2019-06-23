$(document).ready(function scrollToTop(e) {
    $("#scrollto").on("click", scrollToTop);
    e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 777);
    });

function sendContacts() {
    var firstName = $('[name="firstName"]').val();
    var lastName = $('[name="lastName"]').val();
    var email = $('[name="email"]').val();
    var subject = $('[name="subject"]').val();
    var message = $('[name="message"]').val();

    var data = {firstName, lastName, email, subject, message};
    console.log(data);

    $.ajax({
        type: "POST",
        data: {
            'First Name': data['firstName'],
            'Last Name': data['lastName'],
            'Email': data['email'],
            'Subject': data['subject'],
            'Message': data['message']
        },
        url: "index.php"
    });
};

var contacts = document.querySelector('.table');
var button = contacts.querySelector('#send');
var fields = contacts.querySelectorAll('.form-control');
var xxx = contacts.querySelectorAll('.xxx');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    sendContacts();

    oneError();

    checkVoids();
});

var checkError = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
};

var checkVoids = function () {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('поле не заполнено', fields[i]);
            var error = checkError ('Cannot be blank');
            xxx[i].insertBefore(error, fields[i]);
        };
    };
};

var oneError = function () {
    var errors = contacts.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    };
};