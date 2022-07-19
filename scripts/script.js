window.onload = function () {

    let call = $('.call-text'),
        close = $('.close'),
        phone = $('.phone'),
        burger = $('.burger-menu'),
        newMenu = $('.new-menu'),
        closeBurger = $('.close-burger'),
        languageBurger = $('.language-burger'),
        language = $('.language'),
        locationBurger = $('.location-burger'),
        timeBurger = $('.time-burger'),
        menuItem = $('.menu-item'),
        servicesBurger = $('.services-burger'),
        languageListBurger = $('.language-list-burger'),
        languageList = $('.language-list'),
        languageArrow = $('.language-arrow'),
        listText = $('.list-text'),
        servicesList = $('.services-list'),
        servicesText = $('.services-text'),
        buttonMain = $('.button-main');


    menuItem.on("click", function () {
        servicesBurger.toggle();
        $('.services-icon').toggleClass("transform");
    });

    menuItem.on("click", function () {
        servicesList.toggle();
    });

    language.click(function () {
        languageList.toggle();
        languageArrow.toggleClass("transform");
    });

    language.click(function () {
        languageListBurger.toggle();
    });

    // Открытие pop-up Звонка
    call.click(function () {
        let window = $('.window');
        window.show();
    });
    let call2 = $('.call2');
    call2.click(function () {
        let window = $('.window');
        window.show();
    });

    phone.click(function () {
        let window = $('.window');
        window.show();
    });

    close.click(function () {
        let window = $('.window');
        window.hide();
    });

    // Скролл до блока Калькулятор
    buttonMain.click(function () {
        $('.calculator')[0].scrollIntoView({behavior: "smooth"});
    });


    burger.click(function () {
        let body = $('body');

        burger.hide();
        closeBurger.show();
        newMenu.show();
        body.css('overflow', 'hidden');
        languageBurger.css('display', 'flex');
        locationBurger.css('display', 'flex');
        timeBurger.css('display', 'flex');
        phone.css('pointer-events', 'none');
        buttonMain.css('pointer-events', 'none');
    });

    closeBurger.click(function () {
        let body = $('body');
        newMenu.hide();
        closeBurger.hide();
        burger.show();
        body.css('overflow', 'visible');
        phone.css('pointer-events', 'auto');
        buttonMain.css('pointer-events', 'auto');
    });
    let value = $(".selector").progressbar("option", "value");

    $(function () {
        $("#progressbar").progressbar({
            value: 7
        });
    });


    // console.log($('#progressbar').progressbar())
    // Калькулятор

    let buttonNext = $('.button-next');
    let inputCalculator = $('.input-calculator');
    let error = $('.error');
    let radioCalculator = $('.radio-calculator');
    let calculatorStep = document.getElementsByClassName('calculator-step')[0];
    let progressTitle = document.getElementsByClassName('progress-title')[0];

    buttonNext.click(function () {
        error.hide();
        let result = false;
        let idx = null;
        for (let i = 0; i < radioCalculator.length; i++) {
            if (radioCalculator[i].checked) {
                result = radioCalculator[i].checked;
                idx = i;
            }
        }
        if (!result) {
            error.show();
            return;
        }
        if (!inputCalculator.eq(idx).val()) {
            inputCalculator.eq(idx).addClass('error-input');
            return;
        }
        $('.calculator-items').hide();
        $('.calculator-items-second').css('display', 'grid');
        calculatorStep.innerText = '2 žingsnis';
        progressTitle.innerText = 'Parengta 20%';
        $('.ceiling-texture-second').css('display', 'block');
        $('#progressbar').progressbar("value", 20);
        $('.step-back').css('display', 'flex');
    });

    $('.step-back').click(function () {
        $('.calculator-items').show();
        $('.calculator-items-second').css('display', 'none');
        calculatorStep.innerText = '1 žingsnis';
        progressTitle.innerText = 'Parengta 0%';
        $('.ceiling-texture-second').css('display', 'none');
        $('#progressbar').progressbar("value", 7);
        $('.step-back').css('display', 'none');
    });


    window.addEventListener('scroll', progressBar);
    window.addEventListener('wheel', progressBar);

    function progressBar(e) {
        if ($(window).width() > 1024) {

            let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let second = $('.second');
            let position = e.deltaY;

            if (windowScroll >= 910 && position > 0) {
                second.show();
                $('.header').hide();
            }
            if (position < 0) {
                $('.header').show();
                second.hide();
            }
        }
    }
}