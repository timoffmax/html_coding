$(function() {
    /**
     * Main menu
     */

    // Settings
    $('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right', 'off-canvas'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Logo">',
        },
        hooks: {
            "open:start": function ($panel) {
                $('.hamburger').addClass('is-active');
            },
            "close:start": function ($panel) {
                $('.hamburger').removeClass('is-active');
            },
        },
    });

    $('#my-menu').on('closePanel', function() {
        console.log('closing');
    });
});
