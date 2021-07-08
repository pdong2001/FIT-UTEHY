$(document).ready(function() {
    $('.content-menu-item').click(function() {
        $('.content-menu-item.active').removeClass("active");
        $(this).addClass('active');
    })
});