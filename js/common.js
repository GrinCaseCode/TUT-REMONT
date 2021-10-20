$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".sidebar-nav li a, .btn-main_scroll").mPageScroll2id({	
		offset: 50
	});

	$(".btn-main_review").click(function() {
		$(".card-main_review").fadeIn(0);
	});

	if ($(window).width() < 992) {
		$(".card-main__title").click(function() {
			$(this).toggleClass("active");
			$(this).siblings(".card-main__content").slideToggle(200);
		});
	}


	//кнопка sandwich
	$(".btn-icon_menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".btn-icon_menu").removeClass("active");
	});

	$(".btn-mobile_search").click(function(e) {
		e.preventDefault();
		$(".moble-search").fadeToggle(200);
	});

	$(".link-map").click(function(e) {
		e.preventDefault();
		if ($("#map-sidebar").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать на карте");
		}
		$("#map-sidebar").fadeToggle(200);
	});

	$(".more-types a").click(function(e) {
		e.preventDefault();
		if ($(this).parent().parent().siblings(".list-unit").find("li:nth-child(n+9)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(this).parent().parent().siblings(".list-unit").find("li:nth-child(n+9)").slideToggle(200);
		
	});


$(".more-results a").click(function(e) {
		e.preventDefault();
		if ($(this).parent().parent().parent().find(".wrap-results > div:nth-child(n+11)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Все сервисные центры");
		}
		$(this).parent().parent().parent().find(".wrap-results > div:nth-child(n+11)").slideToggle(200);
		
	});

$(".more-button_results a").click(function(e) {
		e.preventDefault();
		if ($(this).parent().parent().parent().find(".wrap-results > div:nth-child(n+11)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(this).parent().parent().parent().find(".wrap-results > div:nth-child(n+11)").slideToggle(200);
		
	});

$(".more-button_services a").click(function(e) {
		e.preventDefault();
		if ($(this).parent().parent().parent().find(".row_service > div:nth-child(n+8)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(this).parent().parent().parent().find(".row_service > div:nth-child(n+8)").slideToggle(200);
		
	});

$(".more-button_manufacturers a").click(function(e) {
		e.preventDefault();
		if ($(this).parent().parent().parent().find(".row_manufacturers > div:nth-child(n+7)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(this).parent().parent().parent().find(".row_manufacturers > div:nth-child(n+7)").slideToggle(200);
		
	});

$(".more-button_categories a").click(function(e) {
		e.preventDefault();
		if ($(".row_categories > div:nth-child(n+5)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(".row_categories > div:nth-child(n+5)").slideToggle(200);
		
	});

$(".more-button_catalog a").click(function(e) {
		e.preventDefault();
		if ($(".item-catalog:nth-child(n+4)").is(":hidden")) {
			$(this).html("Скрыть");
		} else {
			
			$(this).html("Показать еще");
		}
		$(".item-catalog:nth-child(n+4)").slideToggle(200);
		
	});


    

    $('.unit__content').each(function(){
    	var th = $(this);
 th.find(".search-unit input").keyup(function(){
    _this = this;
    
    $.each(th.find(".list-unit li"), function() {
        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
            $(this).hide();
        } else {
            $(this).show();                
}
     });
 });
});


	$(".dropdown-main_type .dropdown-main__list > li > a").click(function(e) {
		e.preventDefault();
		$(this).parent().siblings("li").removeClass("active");
		$(this).parent().siblings("li").find("ul").slideUp(200);
		$(this).parent().toggleClass("active");
		$(this).siblings("ul").slideToggle(200);
	});

	$(".item-sidebar__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings(".item-sidebar__content").slideToggle(200);
	});


	$(".btn-main_filter").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");  
		if ($(".filters-mobile .item-sidebar_filter").is(":hidden")) {
			$(".filters-mobile .item-sidebar_filter").slideDown(200);
			$(this).find("span").text("Свернуть фильтр");
		} else {
			$(".filters-mobile .item-sidebar_filter").slideUp(200);
			$(this).find("span").text("Показать фильтр");	
		}
	});


	/*input file*/
	$("input[type='file']").change(function(){
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.append("<div>" + filename + "</div>");
	});


	$(".unit__head").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).siblings(".unit__content").slideToggle(200);
	});

	$(".arrow-main_review").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().parent().parent().find(".card-review_answer").slideToggle(200);
	});

	$(".ratting-estimate .rating__item").click(function() {
		$(this).parent().removeClass("rating_1");
		$(this).parent().removeClass("rating_2");
		$(this).parent().removeClass("rating_3");
		$(this).parent().removeClass("rating_4");
		$(this).parent().removeClass("rating_5");
		var rating = $(this).attr("data-rating");
		$(this).parent().addClass("rating_" + rating);
		$(this).parent().siblings(".ratting-estimate__value").html("Ваша оценка " + rating + " из 5");
	});

	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});
	//слайдер

	$('.slider-services').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4.5C13.472 4.5 4.5 13.472 4.5 24.5C4.5 35.528 13.472 44.5 24.5 44.5C35.528 44.5 44.5 35.528 44.5 24.5C44.5 13.472 35.528 4.5 24.5 4.5ZM24.5 7.5C33.874 7.5 41.5 15.126 41.5 24.5C41.5 33.874 33.874 41.5 24.5 41.5C15.126 41.5 7.5 33.874 7.5 24.5C7.5 15.126 15.126 7.5 24.5 7.5ZM26.3248 16.4954L19.3528 23.4374C19.0708 23.7194 18.9128 24.1014 18.9128 24.4994C18.9128 24.8994 19.0708 25.2814 19.3528 25.5634L26.3248 32.5034C26.6168 32.7954 27.0008 32.9414 27.3828 32.9414C27.7668 32.9414 28.1528 32.7954 28.4448 32.4994C29.0288 31.9114 29.0268 30.9634 28.4408 30.3794L22.5368 24.4994L28.4408 18.6214C29.0268 18.0374 29.0288 17.0874 28.4448 16.4994C27.8608 15.9094 26.9128 15.9134 26.3248 16.4954Z" fill="#6AC48A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C35.028 4.5 44 13.472 44 24.5C44 35.528 35.028 44.5 24 44.5C12.972 44.5 4 35.528 4 24.5C4 13.472 12.972 4.5 24 4.5ZM24 7.5C14.626 7.5 7 15.126 7 24.5C7 33.874 14.626 41.5 24 41.5C33.374 41.5 41 33.874 41 24.5C41 15.126 33.374 7.5 24 7.5ZM22.1752 16.4954L29.1472 23.4374C29.4292 23.7194 29.5872 24.1014 29.5872 24.4994C29.5872 24.8994 29.4292 25.2814 29.1472 25.5634L22.1752 32.5034C21.8832 32.7954 21.4992 32.9414 21.1172 32.9414C20.7332 32.9414 20.3472 32.7954 20.0552 32.4994C19.4712 31.9114 19.4732 30.9634 20.0592 30.3794L25.9632 24.4994L20.0592 18.6214C19.4732 18.0374 19.4712 17.0874 20.0552 16.4994C20.6392 15.9094 21.5872 15.9134 22.1752 16.4954Z" fill="#6AC48A"/></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				infinite: false,
				slidesPerRow: 2,
				rows: 2,
			}
		}
		]
	});

	$('.slider-images').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4.5C13.472 4.5 4.5 13.472 4.5 24.5C4.5 35.528 13.472 44.5 24.5 44.5C35.528 44.5 44.5 35.528 44.5 24.5C44.5 13.472 35.528 4.5 24.5 4.5ZM24.5 7.5C33.874 7.5 41.5 15.126 41.5 24.5C41.5 33.874 33.874 41.5 24.5 41.5C15.126 41.5 7.5 33.874 7.5 24.5C7.5 15.126 15.126 7.5 24.5 7.5ZM26.3248 16.4954L19.3528 23.4374C19.0708 23.7194 18.9128 24.1014 18.9128 24.4994C18.9128 24.8994 19.0708 25.2814 19.3528 25.5634L26.3248 32.5034C26.6168 32.7954 27.0008 32.9414 27.3828 32.9414C27.7668 32.9414 28.1528 32.7954 28.4448 32.4994C29.0288 31.9114 29.0268 30.9634 28.4408 30.3794L22.5368 24.4994L28.4408 18.6214C29.0268 18.0374 29.0288 17.0874 28.4448 16.4994C27.8608 15.9094 26.9128 15.9134 26.3248 16.4954Z" fill="#6AC48A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C35.028 4.5 44 13.472 44 24.5C44 35.528 35.028 44.5 24 44.5C12.972 44.5 4 35.528 4 24.5C4 13.472 12.972 4.5 24 4.5ZM24 7.5C14.626 7.5 7 15.126 7 24.5C7 33.874 14.626 41.5 24 41.5C33.374 41.5 41 33.874 41 24.5C41 15.126 33.374 7.5 24 7.5ZM22.1752 16.4954L29.1472 23.4374C29.4292 23.7194 29.5872 24.1014 29.5872 24.4994C29.5872 24.8994 29.4292 25.2814 29.1472 25.5634L22.1752 32.5034C21.8832 32.7954 21.4992 32.9414 21.1172 32.9414C20.7332 32.9414 20.3472 32.7954 20.0552 32.4994C19.4712 31.9114 19.4732 30.9634 20.0592 30.3794L25.9632 24.4994L20.0592 18.6214C19.4732 18.0374 19.4712 17.0874 20.0552 16.4994C20.6392 15.9094 21.5872 15.9134 22.1752 16.4954Z" fill="#6AC48A"/></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: false,
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-manufacturers').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesPerRow: 3,
		rows: 2,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4.5C13.472 4.5 4.5 13.472 4.5 24.5C4.5 35.528 13.472 44.5 24.5 44.5C35.528 44.5 44.5 35.528 44.5 24.5C44.5 13.472 35.528 4.5 24.5 4.5ZM24.5 7.5C33.874 7.5 41.5 15.126 41.5 24.5C41.5 33.874 33.874 41.5 24.5 41.5C15.126 41.5 7.5 33.874 7.5 24.5C7.5 15.126 15.126 7.5 24.5 7.5ZM26.3248 16.4954L19.3528 23.4374C19.0708 23.7194 18.9128 24.1014 18.9128 24.4994C18.9128 24.8994 19.0708 25.2814 19.3528 25.5634L26.3248 32.5034C26.6168 32.7954 27.0008 32.9414 27.3828 32.9414C27.7668 32.9414 28.1528 32.7954 28.4448 32.4994C29.0288 31.9114 29.0268 30.9634 28.4408 30.3794L22.5368 24.4994L28.4408 18.6214C29.0268 18.0374 29.0288 17.0874 28.4448 16.4994C27.8608 15.9094 26.9128 15.9134 26.3248 16.4954Z" fill="#6AC48A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C35.028 4.5 44 13.472 44 24.5C44 35.528 35.028 44.5 24 44.5C12.972 44.5 4 35.528 4 24.5C4 13.472 12.972 4.5 24 4.5ZM24 7.5C14.626 7.5 7 15.126 7 24.5C7 33.874 14.626 41.5 24 41.5C33.374 41.5 41 33.874 41 24.5C41 15.126 33.374 7.5 24 7.5ZM22.1752 16.4954L29.1472 23.4374C29.4292 23.7194 29.5872 24.1014 29.5872 24.4994C29.5872 24.8994 29.4292 25.2814 29.1472 25.5634L22.1752 32.5034C21.8832 32.7954 21.4992 32.9414 21.1172 32.9414C20.7332 32.9414 20.3472 32.7954 20.0552 32.4994C19.4712 31.9114 19.4732 30.9634 20.0592 30.3794L25.9632 24.4994L20.0592 18.6214C19.4732 18.0374 19.4712 17.0874 20.0552 16.4994C20.6392 15.9094 21.5872 15.9134 22.1752 16.4954Z" fill="#6AC48A"/></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				infinite: false,
				slidesPerRow: 2,
				rows: 3,
			}
		}
		]
	});

	$('.slider-reviews').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4.5C13.472 4.5 4.5 13.472 4.5 24.5C4.5 35.528 13.472 44.5 24.5 44.5C35.528 44.5 44.5 35.528 44.5 24.5C44.5 13.472 35.528 4.5 24.5 4.5ZM24.5 7.5C33.874 7.5 41.5 15.126 41.5 24.5C41.5 33.874 33.874 41.5 24.5 41.5C15.126 41.5 7.5 33.874 7.5 24.5C7.5 15.126 15.126 7.5 24.5 7.5ZM26.3248 16.4954L19.3528 23.4374C19.0708 23.7194 18.9128 24.1014 18.9128 24.4994C18.9128 24.8994 19.0708 25.2814 19.3528 25.5634L26.3248 32.5034C26.6168 32.7954 27.0008 32.9414 27.3828 32.9414C27.7668 32.9414 28.1528 32.7954 28.4448 32.4994C29.0288 31.9114 29.0268 30.9634 28.4408 30.3794L22.5368 24.4994L28.4408 18.6214C29.0268 18.0374 29.0288 17.0874 28.4448 16.4994C27.8608 15.9094 26.9128 15.9134 26.3248 16.4954Z" fill="#6AC48A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C35.028 4.5 44 13.472 44 24.5C44 35.528 35.028 44.5 24 44.5C12.972 44.5 4 35.528 4 24.5C4 13.472 12.972 4.5 24 4.5ZM24 7.5C14.626 7.5 7 15.126 7 24.5C7 33.874 14.626 41.5 24 41.5C33.374 41.5 41 33.874 41 24.5C41 15.126 33.374 7.5 24 7.5ZM22.1752 16.4954L29.1472 23.4374C29.4292 23.7194 29.5872 24.1014 29.5872 24.4994C29.5872 24.8994 29.4292 25.2814 29.1472 25.5634L22.1752 32.5034C21.8832 32.7954 21.4992 32.9414 21.1172 32.9414C20.7332 32.9414 20.3472 32.7954 20.0552 32.4994C19.4712 31.9114 19.4732 30.9634 20.0592 30.3794L25.9632 24.4994L20.0592 18.6214C19.4732 18.0374 19.4712 17.0874 20.0552 16.4994C20.6392 15.9094 21.5872 15.9134 22.1752 16.4954Z" fill="#6AC48A"/></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.row_advantages').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		adaptiveHeight: true,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4.5C13.472 4.5 4.5 13.472 4.5 24.5C4.5 35.528 13.472 44.5 24.5 44.5C35.528 44.5 44.5 35.528 44.5 24.5C44.5 13.472 35.528 4.5 24.5 4.5ZM24.5 7.5C33.874 7.5 41.5 15.126 41.5 24.5C41.5 33.874 33.874 41.5 24.5 41.5C15.126 41.5 7.5 33.874 7.5 24.5C7.5 15.126 15.126 7.5 24.5 7.5ZM26.3248 16.4954L19.3528 23.4374C19.0708 23.7194 18.9128 24.1014 18.9128 24.4994C18.9128 24.8994 19.0708 25.2814 19.3528 25.5634L26.3248 32.5034C26.6168 32.7954 27.0008 32.9414 27.3828 32.9414C27.7668 32.9414 28.1528 32.7954 28.4448 32.4994C29.0288 31.9114 29.0268 30.9634 28.4408 30.3794L22.5368 24.4994L28.4408 18.6214C29.0268 18.0374 29.0288 17.0874 28.4448 16.4994C27.8608 15.9094 26.9128 15.9134 26.3248 16.4954Z" fill="#6AC48A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C35.028 4.5 44 13.472 44 24.5C44 35.528 35.028 44.5 24 44.5C12.972 44.5 4 35.528 4 24.5C4 13.472 12.972 4.5 24 4.5ZM24 7.5C14.626 7.5 7 15.126 7 24.5C7 33.874 14.626 41.5 24 41.5C33.374 41.5 41 33.874 41 24.5C41 15.126 33.374 7.5 24 7.5ZM22.1752 16.4954L29.1472 23.4374C29.4292 23.7194 29.5872 24.1014 29.5872 24.4994C29.5872 24.8994 29.4292 25.2814 29.1472 25.5634L22.1752 32.5034C21.8832 32.7954 21.4992 32.9414 21.1172 32.9414C20.7332 32.9414 20.3472 32.7954 20.0552 32.4994C19.4712 31.9114 19.4732 30.9634 20.0592 30.3794L25.9632 24.4994L20.0592 18.6214C19.4732 18.0374 19.4712 17.0874 20.0552 16.4994C20.6392 15.9094 21.5872 15.9134 22.1752 16.4954Z" fill="#6AC48A"/></svg><div/>',
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 992, 
			settings: 'unslick'
		}
		]
	});

	$(".item-catalog .btn-open").click(function(e) {
		e.preventDefault();
		$('.slider-images').slick('refresh');
		$(this).toggleClass("active");
		if ($(this).siblings(".item-catalog__hiddenmob").is(":hidden")) {
			$(this).siblings(".item-catalog__hiddenmob").fadeIn(200);
			$(this).find(".btn-open__icon + span").text("Свернуть");
		} else {
			$(this).siblings(".item-catalog__hiddenmob").fadeOut(200);
			$(this).find(".btn-open__icon + span").text("Подробнее");
		}
	});

$('.tab-quiz').each(function(index, element){
  $(this).attr('data-block', index);  
   index += 1;
  $('.progressbar-numbers').append('<div class="progressbar-numbers__item" >'+index+'</div>');
  $(".progressbar-numbers__item:first-child").addClass("active");
});


	var w = 0;
	var s = $('.tab-quiz').length-1;
	var b = 100 / s;


	$(".btn-main_next").click(function(e) {
		e.preventDefault();
		w = w + b;
		$(".quiz-progressbar__value").css("width", w + "%");
		$(".progressbar-numbers__item.active").next().addClass("active");
		$(this).parent().parent().fadeOut(0);
		$(this).parent().parent().next(".tab-quiz").fadeIn(200);
	});

	$(".btn-main_prev").click(function(e) {
		e.preventDefault();
		w = w - b;
		$(".quiz-progressbar__value").css("width", w + "%");
		$(".progressbar-numbers__item.active").last().removeClass("active");
		$(this).parent().parent().fadeOut(0);
		$(this).parent().parent().prev(".tab-quiz").fadeIn(200);
	});

	$(window).resize(function () {
		if ($(window).width() < 992) {
			$('.row_advantages').slick('refresh');
		}
	})

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$(".fancybox-main").fancybox({
		beforeShow : function(){
			$(".fancybox-skin").addClass("modal-fancybox");
			
		}
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

