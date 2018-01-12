/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
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
    strings: ["Desenvolvedora de Software", "Consultora de Agilidade", "Professora", "Palestrante"],
    // strings: ["<span class='white-text'>MULHER,</span> desenvolvedora de software há 13 anos.", 
    //           "<span class='white-text'>MULHER,</span> mestre em Ciência da Computação pelo Instituto de Matemética e Estatística da USP.",
    //           "<span class='white-text'>MULHER,</span> pós-graduada pelo Instituto Tecnológico de Aeronáutica.", 
    //           "<span class='white-text'>MULHER,</span> que sou, fora da curva! Iniciando projeto de mesmo nome em 2018 (conheça mais aqui)."],
    speed: 90,
    breakLines: false,
    loop: true,
    lifeLike: false,
    nextStringDelay: 1000,
    startDelete: true
})
.tiPause(2000);