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
button.addEventListener('click', function (evt) {
    evt.preventDefault();
    sendContacts();
});