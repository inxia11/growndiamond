const mobileHeader = $(".header__mobile");
const burgerBtn = $(".header__burger");
const closeHeaderBtn = $(".header-mobile__close");


$(document).ready(function () {

  burgerBtn.on("click", function () {
    mobileHeader.addClass("active");
  });

  closeHeaderBtn.on("click", function () {
    mobileHeader.removeClass("active");
  });


  if($('.video-wrap').length > 0) {
    let videoWrap = $('.video-wrap');

    videoWrap.map(function() {
      let video = $(this).find('video');
      let play = $(this).find('.play');

      play.on('click', function() {
        video[0].play();
        play.addClass('hide');
        video.addClass('playing');
      });

      video.on('ended', function() {
        play.removeClass('hide');
        video.removeClass('playing');
      });

      video.on('click', function() {
        if(video.hasClass('playing')) {
          video[0].pause();
          play.removeClass('hide');
          video.removeClass('playing');
        }else{
          video[0].play();
          play.addClass('hide');
          video.addClass('playing');
        }
      });

    });

  }


  if ($(".main-awards__slider").length > 0) {
    const swiper = new Swiper(".main-awards__slider", {
      slidesPerView: 2.3,
      spaceBetween: 16,
      loop: true,
      navigation: {
        prevEl: ".main-awards__slider-button--prev",
        nextEl: ".main-awards__slider-button--next",
      },
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".article-similar__slider").length > 0) {
    const swiper = new Swiper(".article-similar__slider", {
      slidesPerView: 1.8,
      spaceBetween: 16,
      loop: true,
      autoHeight: true,
      navigation: {
        prevEl: ".article-similar__button--prev",
        nextEl: ".article-similar__button--next",
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
          spaceBetween: 16,
          autoHeight: true,
        },

        1520: {
          slidesPerView: 4,
          spaceBetween: 24,
          autoHeight: true,
        },
      },
    });
  }

  if ($(".catalog-similar__slider").length > 0) {
    const swiper = new Swiper(".catalog-similar__slider", {
      slidesPerView: 2,
      spaceBetween: 18,
      loop: true,
      autoHeight: true,
      navigation: {
        prevEl: ".catalog-similar__button--prev",
        nextEl: ".catalog-similar__button--next",
      },
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 16,
          autoHeight: true,
        },

        1520: {
          slidesPerView: 5,
          spaceBetween: 24,
          autoHeight: true,
        },
      },
    });
  }

  if ($(".blog-section__slider").length > 0) {
    const sliders = document.querySelectorAll(".blog-section__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;
        
        if (!slider.swiper) {
          navNext = $(slider)
            .find(".blog-section__button--next")[0];
          navPrev = $(slider)
            .find(".blog-section__button--prev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1.8,
            spaceBetween: 16,
            loop: true,
            autoHeight: true,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              767: {
                slidesPerView: 4,
                spaceBetween: 16,
                autoHeight: true,
              },

              1520: {
                slidesPerView: 4,
                spaceBetween: 24,
                autoHeight: true,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".catalog-detail__img-slider").length > 0) {

    var thumbSwiper = new Swiper(".catalog-detail__img-thumbs-slider", {
      spaceBetween: 18,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      autoHeight: true,
    });
    var swiper2 = new Swiper(".catalog-detail__img-slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".catalog-detail__button--next",
        prevEl: ".catalog-detail__button--prev",
      },
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  }

  if($(".catalog-section__filter-name-link").length > 0) {
    $(".catalog-section__filter-name-link").on("click", function(event) {
      event.preventDefault();
      $(this).toggleClass("catalog-section__filter-name-link--active");
    });
  }
  
  AOS.init();
});
