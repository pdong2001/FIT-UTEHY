$(document).ready(function() {
    const contentMenuItemTemplate = $('.content-menu-item').clone();
    const contentMenu = $('.content-menu.slider');
    $('.row-ID').each(function(index) {
        var temp = contentMenuItemTemplate.clone();
        temp.find('a').attr('href', '#' + $(this).attr('id'))
        temp.removeClass('content-menu-item-template');
        temp.find('a').html($(this).find('.title:first-of-type h2').html());
        temp.appendTo(contentMenu);
        console.log(temp);
    });
    $('.content-menu-item').click(function() {
        $('.content-menu-item.active').removeClass("active");
        $(this).addClass('active');
    });
    $(".content-menu.slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
});