jQuery(document).ready(function($){
  


	$('.star_wrapper span.star_icon').on('click', function(e) {
  
  	
  	$('.star_wrapper span.star_icon').removeClass('active');
  	
  	$(this).addClass('active');
  	$(this).prevAll().addClass('active');
	
	});
	

	$('.star_icon_one, .star_icon_two, .star_icon_three').on('click', function(e) {
	  
		$('section.stars_prompt').fadeOut();
		
		$('section.section_form').delay(600).fadeIn();
	
	
	});
	
	
	$('.star_icon_four, .star_icon_five').on('click', function(e) {
	  
		$('section.stars_prompt').fadeOut();
		
		$('section.section_location').delay(600).fadeIn();
	
	
	});
	
	
	

$('.deals_tab').on('click', function(e) {
	  
	
		$('section.deals').toggleClass('open');
	
	
	});
	
	
// Validation hooks for parent divs
	
	
$(document).on('lv_after_field_valid',function(event,element){

		$(element).parent().parent().addClass('success');
		$(element).parent().parent().removeClass('invalid');

});


// Validation hooks for parent divs


$(document).on('lv_after_field_invalid',function(event,element){

		$(element).parent().parent().addClass('invalid');
		$(element).parent().parent().removeClass('success');

});



// Location Selection


$('.single_location_wrapper').on('click', function(e) {
	
	$(this).addClass('selected');
	
	// Fade away other location
	
	$('.single_location_wrapper').not(this).delay(1000).fadeOut(500);
	
	
	// Fade Logo and CTAs
	
	$('section.section_location .location_tee_up').addClass('fade');
	
	// Call in Location Social Icons
	
	$('.choose_wrapper').addClass('selected');
	
	
});

$('.left_location').on('click', function(e) {
  

	$('.social_icons.solana').hide();


});


$('.right_location').on('click', function(e) {
  

	$('.social_icons.mission').hide();


});


// Reverse Location Selection


$('.change_location').on('click', function(e) {
  
	$(this).addClass('selected');
	
	$('.choose_wrapper').removeClass('selected');
	
	
	$('.single_location_wrapper').addClass('return');

});






}); // document ready