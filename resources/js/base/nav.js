$(document).ready(function() {
    $('.dropdown-menu input').focus(function(e) {
        var parent = $(this).parent();
        while (!parent.hasClass('dropdown-content')) {
            parent = parent.parent();
        }
        parent.addClass('visible');
    });
    $('.dropdown-menu input').focusout(function(e) {
        var parent = $(this).parent();
        while (!parent.hasClass('dropdown-content')) {
            parent = parent.parent();
        }
        parent.removeClass('visible');
    });
    $('.root button').click(function() {
        const content = $(this).parent().parent().find('ul');
        if (content.hasClass('visible')) {
            content.removeClass('visible');
        } else {
            content.addClass('visible');
        }
    });
    $('header .search-bar #search-title-input').css('width', $('header .search-bar .time div').width() + 'px');
    const menuBar = $('.menubar');
    const menuBarOffsetTop = menuBar.offset().top;
    const scollMenu = $('.scroll-to');
    const scollMenuOffsetTop = scollMenu.offset().top;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= menuBarOffsetTop) {
            menuBar.addClass('fixed');
        } else {
            menuBar.removeClass('fixed');
        }
        if (scrollTop >= scollMenuOffsetTop) {
            scollMenu.addClass('fixed');
        } else {
            scollMenu.removeClass('fixed');
        }
    });
    // $('.content-menu-item').click(function() {
    //     $('.content-menu-item').removeClass('active');
    //     $(this).addClass('active');
    //     var fixed = $('.fixed');
    //     if (fixed.length != 0) {
    //         var height = 0;
    //         fixed.each(function(index) {
    //             height += $(this).height();
    //         });
    //         $('body').animate({
    //             scrollTop: $('body').scrollTop() - height + 'px'
    //         });
    //     }
    // });
});