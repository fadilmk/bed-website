$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
document.addEventListener('DOMContentLoaded', function() {
    var navTrigger = document.querySelector('.navTrigger');
    var homeText = document.getElementById('home-text');

    navTrigger.addEventListener('click', function() {
        if (homeText.classList.contains('hidden')) {
            homeText.classList.remove('hidden');
        } else {
            homeText.classList.add('hidden');
        }
    });
});

document.addEventListener('scroll', function () {
    const fadeLeft = document.querySelector('.product');
    if (window.pageYOffset > fadeLeft.offsetTop) {
        fadeLeft.classList.add('active');
    } else {
        fadeLeft.classList.remove('active');
    }
});
