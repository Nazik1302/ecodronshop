   $(document).ready(function () {

                 if($("html").innerWidth() > 1024) {
        $("#fly").addClass("wow").addClass("bounceInRight");
    }
       
       
                $(".header-menu__open").click(function () {
        var $this = $(this);

        if($this.hasClass("header-menu__open_opened")) {
            $this.removeClass("header-menu__open_opened");
            $(".header-menu").fadeOut();

            $(".header").removeClass("header_theme_white");
        } else {
            $this.addClass("header-menu__open_opened");
            $(".header-menu").fadeIn();

            $(".header").addClass("header_theme_white");
        }
    });  
       
       
       
    $(".buy-slider").slick({
        dots: false,
        arrows: false,
        asNavFor: ".buy-nav",
        infinite: false
    });
    $(".buy-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        asNavFor: ".buy-slider",
        infinite: false
    });

    $(".buy-colors__item").click(function () {
        var $this = $(this),
            color = $this.data("color");

        $(".buy-colors__item").removeClass("buy-colors__item_active");
        $this.addClass("buy-colors__item_active");

        var id = color == "green" ? 0 : 3;
        $(".buy-slider").slick("slickGoTo", id);

        var colorRu = color == "green" ? "Желтый" : "Белый";
        $("[name=formDesc]").val(colorRu);
    });
       
        $(".reviews-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
            infinite: false,
        dots: true,
        prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
       
        $(".video-slider").slick({
        slidesToShow: 2,
     slickNext: true,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
        adaptiveHeight: false,
            infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    });
       

       
       
              if($("html").innerWidth() < 480) {
           
         $(".order-wrap").addClass("mobil-slider"); 
        $(".mobil-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,             
        dots: true,
        prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
        adaptiveHeight: false
    }); 
           
       }

       
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('active');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}  
       
       
     $(".item-cool").click(function () {
        $this = $(this);

        if ($this.hasClass("item-cool__opened")) {
            $this.removeClass("item-cool__opened");
            $this.find(".item-cool__body").slideUp();
        } else {
            $this.addClass("item-cool__opened");
            $this.find(".item-cool__body").slideDown();
        }
    }); 
       
      
       
       
       
//scroll  
           $(".scroll-to").click(function () {
        var to = $(this).data("to") || $(this).attr("href");
        
        if ($(to).length > 0) {
            
            if (event) event.preventDefault();

            var top = $(to).offset().top + 1;

            top = top - $(".header").innerHeight();

//         if (to == "#video") {
//               top = 0;
//           }

           if($("html").innerWidth() < 768) {
              
               
               $(".header-menu").fadeOut();
              $(".header-menu__open").removeClass("header-menu__open_opened");

              $(".header").removeClass("header_theme_white");
            }

            $("body, html").animate({scrollTop: top}, 500);
        }
    });
       
       
       
       
           var menu_selector = ".header-menu__ul";
    function onScroll() {
        var scroll_top = $(document).scrollTop();
        
        

        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            if(!hash.startsWith("#")){
                return false;
            }
            var target = $(hash);
            if (target.length) {
                if (target.position().top - $(".header").innerHeight() <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                    $(menu_selector + " .header-menu__ul-link").removeClass("header-menu__ul-link_active");
                    $(this).addClass("header-menu__ul-link_active");
                } else {
                    $(this).removeClass("header-menu__ul-link_active");
                }
            }
        });

        var $header = $(".header");

        if (scroll_top > $(".video-section").innerHeight() - $(".header").innerHeight()) {
            if (!$header.hasClass("header_fixed")) {
                $header.hide().fadeIn().addClass("header_fixed");
            }
        } else {
            $header.removeClass("header_fixed");
        }
    }

    onScroll();

    $(document).on("scroll", onScroll);
       
       
new WOW().init();
       
       
       if($("html").innerWidth() < 768) {
           
         $(".children-men__dron").removeClass("el_1");   
           
       }
       

       });
    
