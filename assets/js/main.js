(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Template Name: Arino
  | Author: Laralink
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Preloader
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Slick Slider
  | 6. Isotop Initialize
  | 7. Review
  | 8. Modal Video
  | 9. Tabs
  | 10. Accordian
  | 11. Counter Animation
  | 12. Ripple
  | 13. Parallax
  | 14. Hobble Effect
  | 15. Social Button Hover
  | 16. Light Gallery
  | 17. Scroll Up
  | 18. Portfolio Section
  | 19. Ripple
  | 20. Parallax Swiper Slider
  | 21. Dynamic contact form
  | 22. Cursor Animation
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    $(window).trigger('scroll');
    $(window).trigger('resize');
    preloader();
    isotopInit();
  });

  $(function () {
    $(window).trigger('resize');
    mainNav();
    stickyHeader();
    dynamicBackground();
    slickInit();
    isotopInit();
    review();
    modalVideo();
    tabs();
    accordian();
    counterInit();
    rippleInit();
    parallaxEffect();
    hobbleEffect();
    hoverTab();
    lightGalleryInit();
    scrollUp();
    portfolioSection();
    parallaxSwiperSlider();
    fullScreenSwiperSlider();
    if ($.exists('.wow')) {
      new WOW().init();
    }
  });

  $(window).on('scroll', function () {
    counterInit();
    parallaxEffect();
    showScrollUp();
  });

  /*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    $('.cs-preloader_in').fadeOut();
    $('.cs-preloader').delay(150).fadeOut('slow');
  }

  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs-nav').append('<span class="cs-munu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs-munu_dropdown_toggle"></span>',
    );
    $('.cs-munu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs-toggle_active')
        .siblings('.cs-nav_list')
        .slideToggle();
    });
    $('.cs-munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
    // Mega Menu
    // $('.cs-mega_wrapper>li>a').removeAttr('href');
    // Modal Btn
    $('.cs-mode_btn').on('click', function () {
      $(this).toggleClass('active');
      $('body').toggleClass('cs-dark');
    });
    // Side Nav
    $('.cs-icon_btn').on('click', function () {
      $('.cs-side_header').addClass('active');
    });
    $('.cs-close, .cs-side_header_overlay').on('click', function () {
      $('.cs-side_header').removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.cs-sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('cs-gescout_sticky');
      } else {
        $header.removeClass('cs-gescout_sticky');
        $header.removeClass('cs-gescout_show');
      }

      if ($header.hasClass('cs-gescout_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('cs-gescout_show');
        } else {
          $header.removeClass('cs-gescout_show');
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $('[data-src]').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')',
      });
    });
  }

  /*--------------------------------------------------------------
    5. Slick Slider
  --------------------------------------------------------------*/
  function slickInit() {
    if ($.exists('.cs-slider')) {
      $('.cs-slider').each(function () {
        // Slick Variable
        var $ts = $(this).find('.cs-slider_container');
        var $slickActive = $(this).find('.cs-slider_wrapper');

        // Auto Play
        var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
        // Auto Play Time Out
        var autoplaySpdVar = 3000;
        if (autoPlayVar > 1) {
          autoplaySpdVar = autoPlayVar;
          autoPlayVar = 1;
        }
        // Slide Change Speed
        var speedVar = parseInt($ts.attr('data-speed'), 10);
        // Slider Loop
        var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
        // Slider Center
        var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
        // Variable Width
        var variableWidthVar = Boolean(
          parseInt($ts.attr('data-variable-width'), 10),
        );
        // Pagination
        var paginaiton = $(this)
          .find('.cs-pagination')
          .hasClass('cs-pagination');
        // Slide Per View
        var slidesPerView = $ts.attr('data-slides-per-view');
        if (slidesPerView == 1) {
          slidesPerView = 1;
        }
        if (slidesPerView == 'responsive') {
          var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
          var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
          var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
          var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
          var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
        }
        // Fade Slider
        var fadeVar = parseInt($($ts).attr('data-fade-slide'));
        fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

        // Slick Active Code
        $slickActive.slick({
          autoplay: autoPlayVar,
          dots: paginaiton,
          centerPadding: '28%',
          speed: speedVar,
          infinite: loopVar,
          autoplaySpeed: autoplaySpdVar,
          centerMode: centerVar,
          fade: fadeVar,
          prevArrow: $(this).find('.cs-left_arrow'),
          nextArrow: $(this).find('.cs-right_arrow'),
          appendDots: $(this).find('.cs-pagination'),
          slidesToShow: slidesPerView,
          variableWidth: variableWidthVar,
          // slidesToScroll: slidesPerView,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: lgPoint,
                // slidesToScroll: lgPoint,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: mdPoint,
                // slidesToScroll: mdPoint,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: smPoint,
                // slidesToScroll: smPoint,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: xsPoing,
                slidesToScroll: xsPoing,
              },
            },
          ],
        });
      });
    }
    // Testimonial Slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
    });
  }

  /*--------------------------------------------------------------
    6. Isotop Initialize
  --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists('.cs-isotop')) {
      $('.cs-isotop').isotope({
        itemSelector: '.cs-isotop_item',
        transitionDuration: '0.60s',
        percentPosition: true,
        masonry: {
          columnWidth: '.cs-grid_sizer',
        },
      });
      /* Active Class of Portfolio*/
      $('.cs-isotop_filter ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
      /*=== Portfolio filtering ===*/
      $('.cs-isotop_filter ul').on('click', 'a', function () {
        var filterElement = $(this).attr('data-filter');
        $('.cs-isotop').isotope({
          filter: filterElement,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    7. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs-rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs-rating_percentage').css('width', reviewVal);
    });
  }

  /*--------------------------------------------------------------
    8. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on('click', '.cs-video_open', function (e) {
      e.preventDefault();
      var video = $(this).attr('href');
      video = video.split('?v=')[1].trim();
      $('.cs-video_popup_container iframe').attr(
        'src',
        `https://www.youtube.com/embed/${video}`,
      );
      $('.cs-video_popup').addClass('active');
    });
    $('.cs-video_popup_close, .cs-video_popup_layer').on('click', function (e) {
      $('.cs-video_popup').removeClass('active');
      $('html').removeClass('overflow-hidden');
      $('.cs-video_popup_container iframe').attr('src', 'about:blank');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    9. Tabs
  --------------------------------------------------------------*/
  function tabs() {
    $('.cs-tabs .cs-tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs-tabs ' + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    10. Accordian
  --------------------------------------------------------------*/
  function accordian() {
    $('.cs-accordian').children('.cs-accordian_body').hide();
    $('.cs-accordian.active').children('.cs-accordian_body').show();
    $('.cs-accordian_head').on('click', function () {
      $(this)
        .parent('.cs-accordian')
        .siblings()
        .children('.cs-accordian_body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      $(this)
        .parent()
        .parent()
        .siblings()
        .find('.cs-accordian_body')
        .slideUp(250);
      /* Accordian Active Class */
      $(this).parents('.cs-accordian').addClass('active');
      $(this).parent('.cs-accordian').siblings().removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    11. Counter Animation
  --------------------------------------------------------------*/
  function counterInit() {
    if ($.exists('.odometer')) {
      $(window).on('scroll', function () {
        function winScrollPosition() {
          var scrollPos = $(window).scrollTop(),
            winHeight = $(window).height();
          var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
          return scrollPosition;
        }

        $('.odometer').each(function () {
          var elemOffset = $(this).offset().top;
          if (elemOffset < winScrollPosition()) {
            $(this).html($(this).data('count-to'));
          }
        });
      });
    }
  }

  /*--------------------------------------------------------------
    12. Ripple
  --------------------------------------------------------------*/
  function rippleInit() {
    if ($.exists('.cs-ripple_version')) {
      $('.cs-ripple_version').each(function () {
        $('.cs-ripple_version').ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    13. Parallax
  --------------------------------------------------------------*/
  function parallaxEffect() {
    $('.cs-parallax_bg, .cs-parallax').each(function () {
      var windowScroll = $(document).scrollTop(),
        windowHeight = $(window).height(),
        barOffset = $(this).offset().top,
        barHeight = $(this).height(),
        barScrollAtZero = windowScroll - barOffset + windowHeight,
        barHeightWindowHeight = windowScroll + windowHeight,
        barScrollUp = barOffset <= windowScroll + windowHeight,
        barSctollDown = barOffset + barHeight >= windowScroll;

      if (barSctollDown && barScrollUp) {
        var calculadedHeight = barHeightWindowHeight - barOffset;
        var largeEffectPixel = calculadedHeight / 5 - 150;
        var mediumEffectPixel = calculadedHeight / 20;
        var miniEffectPixel = calculadedHeight / 10;

        $(this)
          .find('.cs-to_left')
          .css('transform', `translateX(-${miniEffectPixel}px)`);
        $(this)
          .find('.cs-to_right')
          .css('transform', `translateX(${miniEffectPixel}px)`);
        $(this)
          .find('.cs-to_up')
          .css('transform', `translateY(-${miniEffectPixel}px)`);
        $(this)
          .find('.cs-to_down')
          .css('transform', `translateY(${miniEffectPixel}px)`);
        $(this)
          .find('.cs-to_rotate')
          .css('transform', `rotate(${miniEffectPixel}deg)`);
        $(this).css('background-position', `center -${largeEffectPixel}px`);
      }
    });
  }

  /*--------------------------------------------------------------
    14. Hobble Effect
  --------------------------------------------------------------*/
  function hobbleEffect() {
    $(document)
      .on('mousemove', '.cs-hobble', function (event) {
        var halfW = this.clientWidth / 2;
        var halfH = this.clientHeight / 2;
        var coorX = halfW - (event.pageX - $(this).offset().left);
        var coorY = halfH - (event.pageY - $(this).offset().top);
        var degX1 = (coorY / halfH) * 8 + 'deg';
        var degY1 = (coorX / halfW) * -8 + 'deg';
        var degX2 = (coorY / halfH) * -50 + 'px';
        var degY2 = (coorX / halfW) * 70 + 'px';
        var degX3 = (coorY / halfH) * -10 + 'px';
        var degY3 = (coorX / halfW) * 10 + 'px';
        var degX4 = (coorY / halfH) * 15 + 'deg';
        var degY4 = (coorX / halfW) * -15 + 'deg';
        var degX5 = (coorY / halfH) * -30 + 'px';
        var degY5 = (coorX / halfW) * 60 + 'px';

        $(this)
          .find('.cs-hover_layer1')
          .css('transform', function () {
            return (
              'perspective( 800px ) translate3d( 0, 0, 0 ) rotateX(' +
              degX1 +
              ') rotateY(' +
              degY1 +
              ')'
            );
          });
        $(this)
          .find('.cs-hover_layer2')
          .css('transform', function () {
            return (
              'perspective( 800px ) translateY(' +
              degX2 +
              ') translateX(' +
              degY2 +
              ')'
            );
          });
        $(this)
          .find('.cs-hover_layer3')
          .css('transform', function () {
            return (
              'perspective( 800px ) translateX(' +
              degX3 +
              ') translateY(' +
              degY3 +
              ') scale(1.02)'
            );
          });
      })
      .on('mouseout', '.cs-hobble', function () {
        $(this).find('.cs-hover_layer1').removeAttr('style');
        $(this).find('.cs-hover_layer2').removeAttr('style');
        $(this).find('.cs-hover_layer3').removeAttr('style');
      });
  }
  /*--------------------------------------------------------------
    15. Social Button Hover
  --------------------------------------------------------------*/
  function hoverTab() {
    $('.cs-hover_tab a').hover(function () {
      $(this)
        .parents('.cs-hover_tab')
        .addClass('active')
        .siblings()
        .removeClass('active');
    });
  }
  /*--------------------------------------------------------------
    16. Light Gallery
  --------------------------------------------------------------*/
  function lightGalleryInit() {
    $('.cs-lightgallery').each(function () {
      $(this).lightGallery({
        selector: '.cs-lightbox_item',
        subHtmlSelectorRelative: false,
        thumbnail: false,
        mousewheel: true,
      });
    });
  }

  /*--------------------------------------------------------------
    17. Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $('.cs-scrollup').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        0,
      );
    });
  }
  // For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $('.cs-scrollup').addClass('cs-scrollup_show');
    } else {
      $('.cs-scrollup').removeClass('cs-scrollup_show');
    }
  }

  /*--------------------------------------------------------------
    18. Portfolio Section
  --------------------------------------------------------------*/
  function portfolioSection() {
    $('.cs-portfolio.cs-style2 .cs-text_btn').hover(
      function () {
        $(this)
          .parents('.cs-portfolio')
          .find('.cs-portfolio_img')
          .addClass('active');
      },
      function () {
        $(this)
          .parents('.cs-portfolio')
          .find('.cs-portfolio_img')
          .removeClass('active');
      },
    );
  }
  /*--------------------------------------------------------------
    20. Parallax Swiper Slider
  --------------------------------------------------------------*/
  function parallaxSwiperSlider() {
    if ($.exists('.cs-parallax_slider')) {
      // Params
      let mainSliderSelector = '.cs-parallax_slider',
        interleaveOffset = 0.5;
      // Main Slider
      let mainSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: false,
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheel: true,
        navigation: {
          nextEl: '.cs-swiper_button_next',
          prevEl: '.cs-swiper_button_prev',
        },
        pagination: {
          el: '.cs-swiper_pagination',
          clickable: true,
        },
        on: {
          init: function () {
            this.autoplay.stop();
          },
          imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
          },
          progress: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;

              swiper.slides[i].querySelector(
                '.cs-swiper_parallax_bg',
              ).style.transform = 'translateX(' + innerTranslate + 'px)';
            }
          },
          touchStart: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = '';
            }
          },
          setTransition: function (swiper, transition) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = transition + 'ms';
              swiper.slides[i].querySelector(
                '.cs-swiper_parallax_bg',
              ).style.transition = transition + 'ms';
            }
          },
        },
      };
      let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
    }
  }

  /* Vertical Full Screen Swiper Slider Active */
  function fullScreenSwiperSlider() {
    if ($.exists('.cs-fullscreen_swiper_slider')) {
      var swiper = new Swiper('.cs-fullscreen_swiper_slider', {
        direction: 'vertical',
        mousewheel: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: '.cs-swiper_pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.cs-swiper_button_next',
          prevEl: '.cs-swiper_button_prev',
        },
      });
    }
  }

  /*--------------------------------------------------------------
    21. Dynamic contact form
  --------------------------------------------------------------*/
  if ($.exists('#cs-form')) {
    const form = document.getElementById('cs-form');
    const result = document.getElementById('cs-result');

    form.addEventListener('submit', function (e) {
      const formData = new FormData(form);
      e.preventDefault();
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = 'Please wait...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })
        .then(async response => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch(error => {
          console.log(error);
          result.innerHTML = 'Something went wrong!';
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = 'none';
          }, 5000);
        });
    });
  }
  /*--------------------------------------------------------------
    22. Cursor Animation
  --------------------------------------------------------------*/
  $(function () {
    $('body').append('<span class="cs-cursor_lg d"></span>');
    $('body').append('<span class="cs-cursor_sm"></span>');
    $(
      '.cs-text_btn, .cs-site_header a, .cs-down_btn, .cs-social_btns a, .cs-menu_widget',
    ).on('mouseenter', function () {
      $('.cs-cursor_lg').addClass('opacity-0');
      $('.cs-cursor_sm').addClass('opacity-0');
    });
    $(
      '.cs-text_btn, .cs-site_header a, .cs-down_btn, .cs-social_btns a, .cs-menu_widget',
    ).on('mouseleave', function () {
      $('.cs-cursor_lg').removeClass('opacity-0');
      $('.cs-cursor_sm').removeClass('opacity-0');
    });
  });
  function cursorMovingAnimation(event) {
    try {
      const timing = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });

      timing
        .to('.cs-cursor_lg', {
          ease: 'power2.out',
        })
        .to(
          '.cs-cursor_sm',
          {
            ease: 'power2.out',
          },
          '-=0.4',
        );
    } catch (err) {
      console.log(err);
    }
  }
  document.addEventListener('mousemove', cursorMovingAnimation);


  document.addEventListener("DOMContentLoaded",()=>{
    let a = `<span class="cs-scrollup cs-scrollup_show" style="left:40px;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="#00e676"/>
        </svg>
    </span>`;
    let div = document.createElement('div');
    div.innerHTML = a;
    document.body.appendChild(div);
  })
  
})(jQuery); // End of use strict
