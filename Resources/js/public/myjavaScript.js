
const _0x772b = ['removeClass', 'image__slider__img-active', 'Customers\x20are\x20our\x20first\x20priority,\x20So\x20Digitalize\x20your\x20Business\x20through\x20us\x20or\x20get\x20that\x20App\x20ready\x20you\x20always\x20wanted', '.image__slider__img', 'A\x20Senior\x20Software\x20Developer\x20With\x20Four\x20Plus\x20Years\x20of\x20Experience\x20in\x20this\x20Field', 'addClass', 'length'];
(function (_0x675d52, _0x772b08) {
    const _0x560105 = function (_0x3649ea) {
        while (--_0x3649ea) {
            _0x675d52['push'](_0x675d52['shift']());
        }
    };
    _0x560105(++_0x772b08);
}(_0x772b, 0x7f));
const _0x5601 = function (_0x675d52, _0x772b08) {
    _0x675d52 = _0x675d52 - 0x0;
    let _0x560105 = _0x772b[_0x675d52];
    return _0x560105;
};
(function () {
    let _0x23adde = $(_0x5601('0x2')),
        _0x539bcb = $('#imgslider__caption'),
        _0x4ee8e2 = ['Need\x20a\x20Site?\x20Order\x20Now!', _0x5601('0x3'), _0x5601('0x1')],
        _0x2fbf60 = 0x0;

    function _0x4f2dbc(_0xe004b7) {
        for (let _0x2a1178 = 0x0; _0x2a1178 < _0xe004b7[_0x5601('0x5')]; _0x2a1178++) {
            _0xe004b7['eq'](_0x2a1178)[_0x5601('0x6')](_0x5601('0x0'));
        }
        _0x2fbf60++, _0x2fbf60 > _0xe004b7[_0x5601('0x5')] - 0x1 && (_0x2fbf60 = 0x0), _0xe004b7['eq'](_0x2fbf60)[_0x5601('0x4')](_0x5601('0x0')), _0x539bcb['text'](_0x4ee8e2[_0x2fbf60]), setTimeout(function () {
            _0x4f2dbc(_0xe004b7);
        }, 0x1770);
    }
    _0x4f2dbc(_0x23adde);
    
    $("#mobile__menu__btn").click(function(){
        var mobileMenu = $("#mobileMenu");
        var mobNavWidth = mobileMenu.width();
        if(mobileMenu.hasClass("mobile__side__nav__show")){
            mobileMenu.removeClass("mobile__side__nav__show");
        }else {
            mobileMenu.addClass("mobile__side__nav__show");
        }
    });
    
    
    $(".mobile__nav__item").click(function () {
        var mobileMenu = $("#mobileMenu");
        var mobNavWidth = mobileMenu.width();
        if (mobileMenu.hasClass("mobile__side__nav__show")) {
            mobileMenu.removeClass("mobile__side__nav__show");
        } else {
            mobileMenu.addClass("mobile__side__nav__show");
        }
    });
    
    
    
    
    $("#contact__form").submit(function () {

        $('.section__loading__panel').fadeIn();

        $.ajax({
            type: "POST",
            data: $(this).serialize(),
            cache: false,
            url: "/api/v1/contact",
            success: function (data) {
                $('.loading').fadeOut();
                $('.sent__container').fadeIn();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('.loading').fadeOut();
                $('.fail__container').fadeIn();
            }

        }).always(function () {

            setTimeout(function () {
                $('.section__loading__panel').fadeOut();
            }, 1500);

        });
        return false;
    });
    
        
}());

