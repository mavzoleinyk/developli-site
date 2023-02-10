$(function() {

	$('.language__current').click(function() {
		$(this).next().slideToggle(300);
		return false;
	});

	$('.header__navbar').click(function() {
		$(this).toggleClass('active');
		$('.header__block').slideToggle(300);
		return false;
	});

	$('.filter__item-title').click(function() {
		$(this).next().slideToggle(300);
		$(this).toggleClass('active');
		return false;
	});

	$('.vacancy__menu-link, .candidate__menu-link').click(function() {
		$(this).next().slideToggle(300);
		$(this).toggleClass('active');
		return false;
	});

	$('.modal-link').click(function() {
		let modal = $(this).attr('href');
		$(modal).fadeIn(300);
		return false;
	});

	$('.modal__blackout, .modal__close').click(function() {
		$(this).parents('.modal-wrapper').fadeOut(300);
		return false;
	});

	$('.search__filter-link a').click(function() {
		$('.filter').toggleClass('active');
		return false;
	});

	$(document).mouseup(function (e){
		var div = $(".search__filter-link a, .filter");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.filter').removeClass('active');
		}
	});

    
});