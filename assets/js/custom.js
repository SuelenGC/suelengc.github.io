/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    commentBox('5770178285535232-proj');

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
$('#type-it').typeIt({
    strings: ["TREINAMENTOS ", "PALESTRAS ", "WORSKHOPS"],
    speed: 150,
    breakLines: false,
    loop: true,
    lifeLike: true,
    nextStringDelay: 3000,
    startDelete: true
})
.tiPause(2000);

$('#owl-carousel-photos').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 600,
    mouseDrag:true,
    touchDrag:true,
    autoHeight:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            slideBy:1
        },
        700:{
            items:2,
            nav:false,
            loop:true,
            slideBy:2
        }
    }
})

$('#owl-carousel-medias').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 600,
    mouseDrag:true,
    touchDrag:true,
    autoHeight:true,
    center:false,
    pagination: false,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false,
            loop:true,
            slideBy:2
        },
        700:{
            items:5,
            nav:false,
            loop:false
        }
    }
})

$('#owl-carousel-depoiments').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 600,
    mouseDrag:true,
    touchDrag:true,
    autoHeight:true,
    center:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            slideBy:1
        },
        700:{
            items:1,
            nav:false,
            loop:true,
            slideBy:2
        }
    }
})