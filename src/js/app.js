// $(() => {
//     $(window).on('load', function () {
//         $('.preloader__wrp').fadeOut();
//     });
// });

$(document).ready(function () {
    let arrow_prev = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 5H2M2 5L5.5 1.5M2 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
        arrow_next = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
        arrow_next_white = "<svg width='11' height='10' viewBox='0 0 11 10' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5'  stroke-width='2'/></svg>",
        arrow_prev_white = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 5H2M2 5L5.5 1.5M2 5L5.5 8.5' stroke-width='2'/></svg>"

    // js-banner-slider
    $('.js-banner-slider').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        dots: true,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrp',
        dotsClass: 'dots',
        dotClass: 'dots__item'
    });

    // main product slider
    $('.js-product-slider').owlCarousel({
        loop: true,
        margin: 20,
        dotsData: true,
        nav: true,
        URLhashListener: true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // main recommend slider
    $('.js-recommended-slider').owlCarousel({
        loop: true,
        margin: 18,
        dotsData: true,
        nav: true,
        URLhashListener: true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // main news slider
    $('.js-news-slider').owlCarousel({
        items: 1,
        loop: true,
        dotsData: true,
        nav: true,
        URLhashListener: true,
        dots: true,
        navText: [arrow_prev, arrow_next_white],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev news-arrow news-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next news-arrow news-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number news__dots',
        dotClass: 'dots-number__item news__dots-item',
    });


    //reviews slider
    $('.js-reviews-slider').owlCarousel({
        loop: true,
        margin: 20,
        dotsData: true,
        nav: true,
        URLhashListener: true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    $('.js-works-slider').owlCarousel({
        items: 1,
        loop: true,
        dotsData: true,
        nav: true,
        URLhashListener: true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
    });
    $(".js-smalimg-slider").owlCarousel({
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 0,
        nav: true
    });

});


$(() => {
    $('.hamburger').on('click', function headerHambClick() {
        $(this).toggleClass('is-active')
        $('.mobile-menu')
            .slideToggle()
            .toggleClass('mobile-menu_open')
        //     .removeClass('feed-open');
    });
});
$(() => {
    $('.js-open-footer-list').on('click', function openFooterMenu() {
        $(this).toggleClass('is-active')
        $(this).next('.footer__list').toggleClass('open')
    })
})

$('.js-select').select2({
    minimumResultsForSearch: -1,
    id: "id"
});

// input number
$(function () {

    (function quantityProducts() {
        let $quantityArrowMinus = $(".input-number__btn_minus");
        let $quantityArrowPlus = $(".input-number__btn_plus");
        let $quantityNum = $(".input-number__input");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();

});

$('[data-fancybox]').fancybox({
    btnTpl: {
        smallBtn:
            '<button type="button" data-fancybox-close class="modal-cart__close" title="{{CLOSE}}">' + 'Закрыть' +
            '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1.42553 1.42553L21 21M1 20.5745L20.5745 1" stroke="#2A2A2A" stroke-width="2"/>' +
            '</svg>' +
            "</button>"
    }
});

// tabs
const tabs = document.querySelector(".tabs");
const tabsBtns = tabs.querySelectorAll(".tabs__btn");
const tabsContents = tabs.querySelectorAll(".tabs__content");

function displayCurrentTab(current) {
    for (let i = 0; i < tabsContents.length; i++) {
        tabsContents[i].style.display = (current === i) ? "block" : "none";
    }
}

displayCurrentTab(0);


tabs.addEventListener("click", event => {
    for (let i = 0; i < tabsBtns.length; i++) {
        tabsBtns[i].classList.remove("is-active");
    }
    if (event.target.className === "tabs__btn") {
        for (let i = 0; i < tabsBtns.length; i++) {
            if (event.target === tabsBtns[i]) {

                displayCurrentTab(i);
                event.target.classList.add('is-active');
                break;
            }
        }
    }
});

