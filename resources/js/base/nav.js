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
});