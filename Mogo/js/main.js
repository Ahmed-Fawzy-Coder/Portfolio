var toTop = document.getElementById("toTop");
window.addEventListener("scroll", function () {
    var header = document.getElementById("navbar");
    if (window.scrollY >= 70) {
        header.classList.add("navbar-background");
    } else {
        header.classList.remove("navbar-background");
    }
    if (window.scrollY >= 500) {
        toTop.classList.add("showToTop");
    } else {
        toTop.classList.remove("showToTop");
    }
});
toTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
$(".aboutSlider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
$(".testimonial1").slick({
    // dots: true,
    prevArrow: "#testimonials .prev-arrow",
    nextArrow: "#testimonials .next-arrow",
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$(".testimonial2").slick({
    // dots: true,
    prevArrow: "#testimonials2 .prev-arrow",
    nextArrow: "#testimonials2 .next-arrow",
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$(".autoplay").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
});
