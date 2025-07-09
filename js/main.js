

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
        this.src = this.src;
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


  if($(".overlay").length > 0) {
    $(".overlay").on("click", function(event) {
      if($(".fancybox__container").length > 0) {
        event.preventDefault();
        $(".fancybox__container").remove();
      }
    });
  }



  if ($(".main-catalog__item--round").length > 0) {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-round'), // контейнер для анимации
      renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
      loop: true, // зацикливание анимации
      autoplay: false, // автоматический запуск анимации
      path: '../../img/json/round.json' // путь к вашему JSON-файлу с анимацией
    });

    hoverAnimation($(".main-catalog__item--round"), animation);
  }

  if ($(".main-catalog__item--emerald").length > 0) {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-emerald'), // контейнер для анимации
      renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
      loop: true, // зацикливание анимации
      autoplay: false, // автоматический запуск анимации
      path: '../../img/json/emerald.json' // путь к вашему JSON-файлу с анимацией
    });

    hoverAnimation($(".main-catalog__item--emerald"), animation);
  }

  if ($(".main-catalog__item--pear").length > 0) {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-pear'), // контейнер для анимации
      renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
      loop: true, // зацикливание анимации
      autoplay: false, // автоматический запуск анимации
      path: '../../img/json/pear.json' // путь к вашему JSON-файлу с анимацией
    });

    hoverAnimation($(".main-catalog__item--pear"), animation);
  }

  if ($(".main-catalog__item--oval").length > 0) {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-oval'), // контейнер для анимации
      renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
      loop: true, // зацикливание анимации
      autoplay: false, // автоматический запуск анимации
      path: '../../img/json/oval.json' // путь к вашему JSON-файлу с анимацией
    });

    hoverAnimation($(".main-catalog__item--oval"), animation);
  }

  if ($(".main-catalog__item--princess").length > 0) {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-princess'), // контейнер для анимации
      renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
      loop: true, // зацикливание анимации
      autoplay: false, // автоматический запуск анимации
      path: '../../img/json/princess.json' // путь к вашему JSON-файлу с анимацией
    });

    hoverAnimation($(".main-catalog__item--princess"), animation);
  }

  function hoverAnimation(element, animation) {
    var interval; 
    element.on("mouseenter", function(event) {
      event.preventDefault();
      element.addClass("main-catalog__item--active");
      animation.play();
      clearInterval(interval);
    });
    

    element.on("mouseleave", function(event) {
      event.preventDefault();
      element.removeClass("main-catalog__item--active");

      if(element.hasClass("main-catalog__item--active")) {
        clearInterval(interval);
      }else{
        interval = setInterval(function() {
          endedAnimation(animation.currentFrame, animation.totalFrames);
        }, 1000/animation.frameRates);
      }
    });

    function endedAnimation(currentFrame, totalFrames) {

      if(currentFrame >= totalFrames - 5) {
        animation.stop();
        clearInterval(interval);
      }
    }
    
  }

  if($(".main-bg__canvas").length > 0) {
    $(".main-bg__canvas").each(function() {
      var canvas = $(this)[0];
      canvas.width = $(this).parent().width() * 0.8;
      canvas.height = $(this).parent().height() * 0.8;
      var ctx = canvas.getContext("2d");
      var stars = [];
      var numStars = 250;

      for(var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * canvas.width);
        var y = Math.round(Math.random() * canvas.height);
        var size = Math.random() * 2;
        var opacity = Math.random();

        var star = new Star(x, y, size, opacity);
        stars.push(star);
      }

      function Star(x, y, size, opacity) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.size = size;
        this.opacity = opacity;
      }

      Star.prototype.draw = function(ctx) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
        ctx.shadowBlur = 8;
	      ctx.shadowColor = '#ffffff';
      }

      function update() {
        for(var i = 0; i < stars.length; i++) {
          stars[i].opacity += 0.01;
          if(stars[i].opacity > 1) {
            stars[i].opacity = 0;
          }
        }
      }

      function draw() {
        update();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < stars.length; i++) {
          stars[i].draw(ctx);
        }
      }

      function animate() {
        draw();
        window.requestAnimationFrame(animate);
      }

      animate();

    })
  }

  
  
  AOS.init({
    offset: -50,
    delay: 100,
    duration: 1000
  });

  
});
