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
	
// Deals



$('.deals_tab').addClass('fade');
	

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
	
	$(this).toggleClass('selected');
	
	// Fade away other location
	
	$('.single_location_wrapper').not(this).delay(400).fadeOut(500);
	
	
	// Fade Logo and CTAs
	
	$('section.section_location .location_tee_up').toggleClass('fade');
	
	// Call in Location Social Icons
	
	$('.choose_wrapper').toggleClass('selected');
	
	$('.single_location_wrapper').removeClass('return');
	
	
	$('.change_location').removeClass('selected');
	
	
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
	
	
	$('.single_location_wrapper:visible').toggleClass('return');
	
	
	$('.single_location_wrapper').removeClass('selected');
	
	
	// Fade Logo and CTAs
	
	
	
	
	$('section.section_location .location_tee_up').delay(1000).queue(function(){
     
		$(this).removeClass('fade').dequeue();
  
	});
	
	
	
	
	// Call in Location Social Icons
	
	$('.choose_wrapper').removeClass('selected');
	
	// Fade away other location
	
	// $('.single_location_wrapper').not(this).delay(1000).fadeIn(500);
	
	$('.single_location_wrapper:hidden').delay(1250).fadeIn(500);
	
	
	$('.social_icons.solana, .social_icons.mission').delay(1300).fadeIn();
	


});






}); // document ready