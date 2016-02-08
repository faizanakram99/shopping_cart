$(document).ready(function () {
    $(".main-nav li a").on("click", function () {
        $(".main-nav li a").removeClass("active");
        $(this).addClass("active");
    });

    $("#mobile-nav").on("click", function () {
        $("#nav-menu").slideToggle();
    });

    $("#cart-anchor").hover(function () {
        $("#cart-list").fadeToggle();
    });

    $("#cart-anchor").click(function () {
        $("#cart-list").fadeToggle();
    });


    $('#bottom-block-1 .item_size').change(function () {
        var result1 = $('#bottom-block-1 .item_size option:selected');
        if (result1.val() === 'std') {
            $('#bottom-block-1 .item_price').html('$180000');
        } else {
            $('#bottom-block-1 .item_price').html('$250000');
        }
    });

    $('#bottom-block-2 .item_size').change(function () {
        var result2 = $('#bottom-block-2 .item_size option:selected');
        if (result2.val() === 'std') {
            $('#bottom-block-2 .item_price').html('$200000');
        } else {
            $('#bottom-block-2 .item_price').html('$300000');
        }
    });



    $('.item_add').click(function () {
        var cart = $('#cart-anchor'),
            imgtofly = $(this).parents().siblings('img');
        if (imgtofly) {
            var imgclone = imgtofly.clone()
                .offset({
                    top: imgtofly.offset().top,
                    left: imgtofly.offset().left
                })
                .css({
                    'opacity': '0.7',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '1000'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 30,
                    'width': 55,
                    'height': 55
                }, 1000, 'easeInElastic');
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach();
            });
        }
          });

});
