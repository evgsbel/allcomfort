// $(() => {
//     $(window).on('load', function () {
//         $('.preloader__wrp').fadeOut();
//     });
// });
$(document).ready(function () {
    let arrow_prev = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 5H2M2 5L5.5 1.5M2 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
        arrow_next = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
        arrow_next_white = "<svg width='11' height='10' viewBox='0 0 11 10' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5'  stroke-width='2'/></svg>"

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
        URLhashListener:true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
        responsive: {
            0: {
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

    // main product slider
    $('.js-news-slider').owlCarousel({
        items: 1,
        loop: true,
        dotsData: true,
        nav: true,
        URLhashListener:true,
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
        URLhashListener:true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
        responsive: {
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

     $('.js-works-slider').owlCarousel({
        items: 1,
        loop: true,
        dotsData: true,
        nav: true,
        URLhashListener:true,
        dots: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
        navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
        dotsClass: 'dots-number',
        dotClass: 'dots-number__item',
    });
});


// $(() => {
//     $('.hamburger').on('click', function headerHambClick() {
//         $(this).toggleClass('is-active')
//         $('.layout-menu')
//             .toggleClass('menu-open')
//             .removeClass('feed-open');
//     });
// });
