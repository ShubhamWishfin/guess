$(document).ready(function () {
    $('.loader').remove();
    console.log("Document is ready");
    var video = $('#myVideo')[0];
    console.log("Video element:", video);
    updateVolumeButton();
    // Get the height of the .hamburgerMenu element
    var h = $('.hamburgerMenu').outerHeight();
    var style = $('<style>.hamburgerMenu::after { height: ' + h + 'px; }</style>');
    $('head').append(style);


    function updateVolumeButton() {
        if (video.muted) {
            $('.volumeOff').show();
            $('.volumeOn').hide();
        } else {
            $('.volumeOff').hide();
            $('.volumeOn').show();
        }
    }


    $('.volumeOff').click(function () {
        video.muted = false;
        updateVolumeButton();
    });

    $('.volumeOn').click(function () {
        video.muted = true;
        updateVolumeButton();
    });

    $('.hamburgerOpen').click(function(){
        $('.hamburgerMenu').show().animate({right: "0%"},1000);
    });

    $('.hamburgerClose').click(function(){
        $('.hamburgerMenu').animate({right: "-100%"},1000, function() {
            $(this).hide(); // Hide after animation completes
        });
    });
})