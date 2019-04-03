$(function() {
    var nav = $('#main-nav');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 42) {
            nav.addClass("f-nav");   
        } else {
            nav.removeClass("f-nav");            
        }
    });
});

$('.container').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


function initMap() {
    var uluru = {
        lat: 46.475765,
        lng: 30.743207
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

document.getElementById('overlay').onclick = function() {
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('form').style.visibility = 'hidden';
}
document.getElementById('map').onclick = function() {
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('form').style.visibility = 'visible';
}
document.getElementById('form').onclick = function() {
    document.getElementById('form').style.visibility = 'visible';
    document.getElementById('overlay').style.visibility = 'visible';
}


// top
$(function() {

    $(window).scroll(function() {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({ scrollTop: 0 }, 800);

    });

});
