$(function () {

    $('.open-window').on('click', function () {
        if (!$('.footer-popover').is(':visible')) {
            //
            $('footer').removeClass('popover-color').addClass('popover-color');
            $('.footer-popover').show();
        }


        $('.footer-popover .popover-text').removeClass('hide').addClass('hide');
        $('.footer-popover #text-' + $(this).attr('id')).removeClass('hide');
        return false;
    })

    $('.close-popover').on('click', function () {
        $('.footer-popover').hide();
        $('footer').removeClass('popover-color');
        return false;
    })
  
    //modal transaction close    
    $('.transaction-close').on('click', function () {
        $('.modal-backdrop-transaction').fadeIn().toggleClass('hide');      
    });

    //modal transaction close/continue alert    
    $('#modal-transaction-close, .btn-modal-continue').on('click', function () {
        $('.modal-backdrop-transaction').toggleClass('hide');
    });

    //modal transaction close/continue alert    
    $('.btn-modal-save-draft').on('click', function () {
        $('#backdrop-modal').toggleClass('hide');
        $('.modal-backdrop').modal('hide');
    });


    $('#btn-toggle-mobile, .menu-backdrop').on('click', function () {
        $('.main-admin').toggleClass('offcanvas-right');
        $('.menu-backdrop').fadeIn().toggleClass('hide');
    });


    $('.btn-toggle').on('click', function () {
        if ($('#sidebar').is('.menu-sm')) {
            $('#toolbar, #main-list, #reports-list').removeClass('full-width');
            $('#sidebar').removeClass('menu-sm');
            $.cookie('isCloseMenu', 'false');
        } else {
            $('#toolbar, #main-list, #reports-list').removeClass('full-width').addClass('full-width');
            $('#sidebar').removeClass('menu-sm').addClass('menu-sm');
            $.cookie('isCloseMenu', 'true');
        }

        return false;
    })
});



/*====================================
=            ON DOM READY            =
====================================*/
$(function () {

    // Toggle Nav on Click
    $('.toggle-nav').click(function () {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

//ajax typeahead search

$(function () {
    $('#live-search, #live-search-modal').typeahead({
        source: [
            {
                id: 1,
                name: 'Toronto'
            },
            {
                id: 2,
                name: 'Montreal'
            },
            {
                id: 3,
                name: 'New York'
            },
            {
                id: 4,
                name: 'Buffalo'
            },
            {
                id: 5,
                name: 'Boston'
            },
            {
                id: 6,
                name: 'Columbus'
            },
            {
                id: 7,
                name: 'Dallas'
            },
            {
                id: 8,
                name: 'Vancouver'
            },
            {
                id: 9,
                name: 'Seattle'
            },
            {
                id: 10,
                name: 'Los Angeles'
            }
        ]
    });

});