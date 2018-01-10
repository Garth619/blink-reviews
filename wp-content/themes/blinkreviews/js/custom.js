jQuery(document).ready(function($){
  

	$('.preloader_circle').addClass('start');



	$('.star_wrapper span.star_icon').on('click', function(e) {
  
  	
  	$('.star_wrapper span.star_icon').removeClass('active');
  	
  	$(this).addClass('active');
  	$(this).prevAll().addClass('active');
	
	});
	

	$('.star_icon_one, .star_icon_two, .star_icon_three').on('click', function(e) {
	  
		$('section.stars_prompt').fadeOut();
		
		$('section.section_form').delay(600).fadeIn();
		
		$('.deals_tab_wrapper').addClass('hide');
		
		
		$('.deals_tab_wrapper').delay(2000).queue(function(){
		     
				$(this).removeClass('hide ready').dequeue();
		  
			});
			
	
	
	});
	
	
	$('.star_icon_four, .star_icon_five').on('click', function(e) {
	  
		$('section.stars_prompt').fadeOut();
		
		$('section.section_location').delay(600).fadeIn();
	
	
	});
	
// Deals



$('.deals_tab_wrapper').addClass('ready');
	

$('.deals_tab').on('click', function(e) {
	  
	$('section.deals').toggleClass('open');
	
	$('span.get_deals').toggleClass('hide');
	$('span.get_deals_close').toggleClass('hide');
	
	
});


// Redeem

function redeemClick() {

	$('span.redeem_button').one('click', function(e) {
  
	
		// Animation
	
		$(this).addClass('active');
	
		$(this).text('Added');
	
		// Add to Checkout Page
	
		var addeditem = $(this).parents('.menu_item').find('.large_header').text();
	
		$('.added_items').append('<span class="added_product">' + addeditem + '<span class="remove">Remove -</span></span');
	
		// Checkout Button
	
		$('.checkout').delay(200).fadeIn();
	
	});

}


redeemClick();



$('span.checkout_button').on('click', function(e) {
  

	$('.redeem_wrapper, .checkout, span.redeem_title').delay(300).fadeOut();
	
	
	$('.deals_step_two').delay(1200).fadeIn();
	
	
});


// Remove Redeemed Items above form

$(document).on('click','.remove', function(e) {
  

	$(this).parent('span.added_product').remove();
	
	
	// If all products are gone
	
	
	if ( $('span.added_product:hidden')) {
  
  	$('.deals_step_two').fadeOut();
  	
  	$('.redeem_wrapper, .checkout, span.redeem_title').delay(300).fadeIn();
  
 }
 
 // Turns One Time Click Back On when going back to step one
 
 redeemClick();


});



	








// Brings back tab after form submission



$(document).on("gform_confirmation_loaded", function (e, form_id) {
  
  $('.deals_tab_wrapper').addClass('ready');
  
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
	
	// $('.single_location_wrapper').not(this).delay(400).fadeOut(500);
	
	$('.single_location_wrapper').not(this).addClass('fade');
	
	
	// Fade Logo and CTAs
	
	$('section.section_location .location_tee_up').toggleClass('fade');
	
	// Call in Location Social Icons
	
	$('.choose_wrapper').toggleClass('selected');
	
	$('.single_location_wrapper').removeClass('return');
	
	
	$('.change_location').removeClass('selected');
	
	
});

$('.left_location').on('click', function(e) {
  

	$('.social_icons.solana').hide();
	
	
		
	var windowWidth = $(window).width();



	function checkWidthleft() {
    
    if (windowWidth < 580) {
        
      
    	
    	$('.section_location').scroll();
			
			$(".section_location").delay(1500).animate({scrollTop: 0}, 500);
    	   		
    		
    } 
    
    
   };
	

	 checkWidthleft();
	
	
	
	
	
});


$('.right_location').on('click', function(e) {
  

	$('.social_icons.mission').hide();
	
	var windowWidthtwo = $(window).width();
	
	function checkWidthright() {
    
    if (windowWidthtwo < 580) {
        
      
    	
    	$('.section_location').scroll();
			
			$(".section_location").delay(1500).animate({scrollTop: 0}, 500);
    	   		
    		
    } 
    
    
   };
	

	 checkWidthright();


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
	
	// $('.single_location_wrapper:hidden').delay(1250).fadeIn(500);
	
	$('.single_location_wrapper').removeClass('fade');
	
	
	$('.social_icons.solana, .social_icons.mission').delay(1300).fadeIn();
	


});






}); // document ready