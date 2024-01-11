$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 555,
    autoplay: true,
    cssEase: "Linear",
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
});

$(".slider-2").slick({
    autoplay: true,
    infinite: true,
    speed: 555,
    cssEase: "Linear",
    centerMode: true,
    centerPadding: "240px",
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "100px",
            },
        },
        {
            breakpoint: 800,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "150px",
            }
        },
        {
            breakpoint: 550,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "0px",
            }
        },
        {
            breakpoint: 320,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "0px",
            }
        },
    ],
});