let scrollY = 0

window.onload = function() {
    let swiper = new Swiper('.swiper-container', {
        // effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000
        }
    })

    $('.bars-bt').on('click', ()=>{
        $('.bars').toggleClass('in')
    });

    $(window).on('scroll', ()=>{
        if(window.scrollY > scrollY)
        {
            if(!($('.title').hasClass('title-left')))
            {
                $('.title').toggleClass('title-left')
                $('.bars').toggleClass('bars-right')
                $('.prop').toggleClass('prop-close')
            }
        }
        else {
            if($('.title').hasClass('title-left'))
            {
                $('.title').toggleClass('title-left')
                $('.bars').toggleClass('bars-right')
                $('.prop').toggleClass('prop-close')
            }
        }
        scrollY = window.scrollY
    })

}