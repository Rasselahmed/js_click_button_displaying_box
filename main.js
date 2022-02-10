$(function () {
    var box = $('.box');
    var button = $('button');

    $('button').css('background', 'red');

    button.on('click', function () {
        box.toggleClass('active');

        if (box.hasClass('active'))
            button.text('box green!').css('background', 'green');

        else
            button.text('box none!').css('background', 'red').box.hide(5000);
    });

    button.on('click', function () {
        box.show(5000); // this system
    });



});