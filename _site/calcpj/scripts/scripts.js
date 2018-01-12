$(document).ready(function () {
	$('.sobre').click(function() {
		scroll_to("#sobre");
	});

	$('.funcionalidades').click(function() {
		scroll_to("#funcionalidades");
	});
	
	$('.galeria').click(function() {
		scroll_to("#galeria");
	});

	$('.contato').click(function() {
		scroll_to("#contato");
	});

	$('.desenvolvedor').click(function() {
		scroll_to("#desenvolvedor");
	});
	
	$('.depoimentos').click(function() {
		scroll_to("#depoimentos");
	});

	function scroll_to(div){
		$('html, body').animate({
			scrollTop: $(div).offset().top
		},500);
	}

});