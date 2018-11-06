$(function(){
	// Navbar Change
	$(window).scroll(function(event) {
		var $window = $(window),
		$navbar = $(".navbar"),
		$navLink = $(".link1"),
		$navToggle = $(".nav-toggle"),
		$navName = $(".nav-name"),
		$arrowUp = $(".arrow-up");
		if($window.scrollTop() > $("#one").offset().top - 500){
			$navbar.addClass('nav-chg-bg');
			$navLink.addClass('nav-chg-link');
			$navToggle.attr("src", "images/icon/nav_toggle_white.svg");
			$navName.addClass('nav-chg-name');
			$arrowUp.removeClass('hide');
		}
		else{
			$navbar.removeClass('nav-chg-bg');
			$navLink.removeClass('nav-chg-link');
			$navToggle.attr("src", "images/icon/nav_toggle.svg");
			$navName.removeClass('nav-chg-name');
			$arrowUp.addClass('hide');
		}
	});
	//Navbar Toggle
	$(".nav-toggle").on('click', function(event) {
		event.preventDefault();
		$("#nav-modal").removeClass('hide').addClass('visible');
		$(".navbar2").addClass('navbar2-visible');
	});
	$(".nav_close").on('click', function(event) {
		event.preventDefault();
		$("#nav-modal").addClass('hide').removeClass('visible');;
		$(".navbar2").removeClass('navbar2-visible');
	});
	$(".link2").on('click', function(event) {
		event.preventDefault();
		$("#nav-modal").addClass('hide').removeClass('visible');;
		$(".navbar2").removeClass('navbar2-visible');
	});

	// Scrolly
	$(".link").on('click', function(e) {
		event.preventDefault();
		var linkNumber = $(this).attr('href');
		$("html,body").animate({
			scrollTop: $(linkNumber).offset().top - 58
		}, 1000);
		return false;
	});

	// Scrolly
	$(".arrow-up").on('click', function(e) {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(".nav-name").on('click', function(e) {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(".arrow-down").on('click', function(e) {
		$("html,body").animate({
			scrollTop: $("#one").offset().top - 58
		}, 1000);
		return false;
	});

	//
	$("#nav-modal").removeClass('display_none');
	$("#project-modal").removeClass('display_none');
	$("#img-modal").removeClass('display_none');

	// Modal
	var $panel = $(".panel");
	// When the user clicks the button, open the modal 
	$panel.on('click', function(event) {
		$("#img-modal").removeClass('hide').addClass('visible');
		$("body").addClass('modal-open');

		// Get img url
		var bg = $(this).css('background-image');
		bg = bg.replace('url(','').replace(')','');
		$("#img-modal .modal-content").prepend(`<img src= ${bg} style="width: 100%">`);

	});
	$(".project-img").on('click', function(event) {
		console.log("ef");
		$("#project-modal").removeClass('hide').addClass('visible');
		$("body").addClass('modal-open');
	});

	// When the user clicks on <span> (x), close the modal
	$(".modal_close").on('click', function(event) {
		event.preventDefault();
		if($("#img-modal").hasClass('visible')){
			$("#img-modal").addClass('hide').removeClass('visible');
			$("#img-modal img").remove();//remove img url
		}
		if($("#project-modal").hasClass('visible')){
			$("#project-modal").addClass('hide').removeClass('visible');
		}
		
		$("body").removeClass('modal-open');
		
	});

	// When the user clicks anywhere outside of the modal, close it
	$(window).on('click', function(event) {
		var navModal = document.getElementsByClassName('modal').item(0),
		projectModal = document.getElementsByClassName('modal').item(1),
		imgModal = document.getElementsByClassName('modal').item(2);
		if (event.target == imgModal) {
			$("#img-modal").addClass('hide').removeClass('visible');
			$("body").removeClass('modal-open');
			$("#img-modal img").remove();//remove img url
		}
		else if(event.target == navModal){
			$("#nav-modal").addClass('hide').removeClass('visible');
			$(".navbar2").removeClass('navbar2-visible');
		}
		else if(event.target == projectModal){
			$("#project-modal").addClass('hide').removeClass('visible');
			$("body").removeClass('modal-open');
		}
	});

});
