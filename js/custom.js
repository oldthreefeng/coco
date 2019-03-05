// JavaScript Document
function preloader() {  
    if (document.images) {  
        var img1 = new Image();  
        var img2 = new Image();  
        var img3 = new Image(); 
        var img4 = new Image(); 
        var img5 = new Image(); 
        var img6 = new Image(); 
        var img7 = new Image(); 
        var img8 = new Image(); 
        img1.src = "img/portfolio/07-1.gif";  
        img2.src = "img/portfolio/07-2.gif";  
        img3.src = "img/portfolio/01-1.jpg";
        img4.src = "img/portfolio/02.jpg";
        img5.src = "img/portfolio/03-1.jpg";
        img6.src = "img/portfolio/05-1.jpg";
        img7.src = "img/portfolio/06-1.jpg";
        img8.src = "img/portfolio/08-1.jpg";
    }  
}  
function addLoadEvent(func) {  
    var oldonload = window.onload;  
    if (typeof window.onload != 'function') {  
        window.onload = func;  
    } else {  
        window.onload = function() {  
            if (oldonload) {  
                oldonload();  
            }  
            func();  
        }  
    }  
}  
addLoadEvent(preloader);

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
$(document).on("contextmenu",".portfolio-padding",function(){
	return false;
})
 $(function () {
          $(".portfolio-padding").bind("click", function (e) {
         // 	alert(1)
              //return false;
          });
  });
$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $(".portfolio_item").click(function(){
    	$("#animatedModal .container").empty();
    	var oId = $(this).attr("id");
    	$("#animatedModal").scrollTop(0)
    	switch (oId){
    		case "demo01":
    			$("#modalDome01").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo02":
    			$("#modalDome02").clone().prependTo("#animatedModal .container");
    			break;	
    		case "demo03":
    			$("#modalDome03").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo04":
    			$("#modalDome04").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo05":
    			$("#modalDome05").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo06":
    			$("#modalDome06").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo07":
    			$("#modalDome07").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo08":
    			$("#modalDome08").clone().prependTo("#animatedModal .container");
    			break;
    		case "demo09":
    			$("#modalDome09").clone().prependTo("#animatedModal .container");
    			break;	
    		default:
    			break;
    	}
    })
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});