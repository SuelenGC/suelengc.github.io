/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    commentBox('5770178285535232-proj', {
      subtextColor: '#fed136'
    });

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
    strings: ["Tudo o que você precisa saber", "e não te contaram", "sobre carreira, métodos ágeis", "e desenvolvimento de aplicativos!"],
    speed: 90,
    breakLines: true,
    loop: false,
    lifeLike: false,
    nextStringDelay: 1000,
    startDelete: true
})
.tiPause(2000);