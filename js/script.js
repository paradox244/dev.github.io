// Navbar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//**************************************************************************************************


// Плавный переход по якорям
$(document).ready(function(){
    $("#nav-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
//**************************************************************************************************

// swiper инициализация
var swiper = new Swiper('.main__swiper-container', {
    navigation: {
        nextEl: '.min__swiper-button-next',
        prevEl: '.main__swiper-button-prev',
    },

    // Бесконечная прокрутка слайдов
    loop: true,

    // Автопрокрутка слайдов
    autoplay: {
      //Пауза между прокруткой
        delay: 4000,
      // Закончить на последнем слайде
        stopOnLastSlide: true,
      // Отключить после ручного переключения
        disableOnInteraction: false
    }
});
//**************************************************************************************************
