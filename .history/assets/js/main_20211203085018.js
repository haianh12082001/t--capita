$(function () {

    // $(".banner-list").slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     speed: 1500,
    //     autoplaySpeed: 5000,
    // });

    ////service
    $(".service .list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
        ]
    });


    ////partner
    $(".partner .list").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
        ]
    });

    /////structure

    $(".structure .list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
        ]
    });


    ////our-team

    $(".our-team .list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
        ]
    });


    //// feedback
    $(".feedback .list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });



    ////SHOW-MENU-MOBI
    $(".menu-bar").click(function () {
        $('.menu-list').toggleClass('active');
        $('.hamburger-menu').toggleClass('active');
        $('.opacity__menu').toggleClass('active');
    })
    $('.opacity__menu').click(function () {
        $('.menu-list').removeClass('active');
        $('.hamburger-menu').removeClass('active');
        $('.opacity__menu').toggleClass('active');
    })

    ////Search
    $('.menu-search').click(function () {
        $('.header--form').toggleClass('active');

    })
})



window.addEventListener("load", function () {
    const links = [...this.document.querySelectorAll(".menu-link")];
    links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.createElement("div");
    line.className = "line-menu";
    document.body.appendChild(line);
    function handleHoverLink(event) {
        // console.log(event.target)
        const { left, top, width, height } = event.target.getBoundingClientRect();
        console.log({ left, top, width, height })
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + 5}px`;
    }
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;
    })

})