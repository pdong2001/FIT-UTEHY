$(document).ready(function() {
    $(".lazy").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 5000,

    });
    $(".center.slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".content-menu.slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }]
    });
});