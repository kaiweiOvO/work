window.onload = function() {
    let swiper = new Swiper('.swiper-container', {
        // effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000
        }
    })

    $('.bars-bt').on('click',()=>{
        $('.bars').toggleClass('in')
    });

}