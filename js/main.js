$(function() {

	$('.language__current').click(function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
		return false;
	});

	$(document).mouseup(function (e){
		var div = $(".language");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			$('.language__block').slideUp(300);
		}
	});

	$('.has-child .menu__link').mouseover(function() {
		if ($(window).innerWidth() < 993) {
			$('.submenu').not($(this).next()).slideUp(300);
		} else {
			$('.submenu').not($(this).next()).hide();
		}
		$('.menu__link').not($(this)).removeClass('active');
		$(this).addClass('active');
		$(this).next().slideDown(300);
		return false;
	});

	$('.submenu').mouseleave(function() {
		$(this).slideUp(300);
		$('.menu__link').removeClass('active'); 
	});

	$(document).mouseup(function (e){
		var div = $(".menu__item");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
		    $('.menu__link').removeClass('active'); 
			$('.submenu').slideUp(300);
		}
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

	$('.filter-mobile-link').click(function() {
		$('.filter-wrapper').fadeIn(300);
		return false;
	});

	$('.filter__close, .filter__blackout').click(function() {
		$('.filter-wrapper').fadeOut(300);
	});

    
});