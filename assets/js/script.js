$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    cssEase: "Linear",
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                autoplay: true,
                speed: 250,
                slidesToShow: 8,
                slidesToScroll: 1,
                cssEase: "Linear",
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                cssEase: "Linear",
            },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                cssEase: "Linear",
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                cssEase: "Linear",
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                cssEase: "Linear",
            },
        },
    ],
});

$(".slider-2").slick({
    autoplay: true,
    infinite: true,
    speed: 250,
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