jQuery(document).ready(function($){
  




	$('.star_wrapper span.star_icon').on('click', function(e) {
  
  	
  	$('.star_wrapper span.star_icon').removeClass('active');
  	
  	$(this).addClass('active');
  	$(this).prevAll().addClass('active');
	
	});
	
	
	

	
	
	$('.deals_tab').on('click', function(e) {
	  
	
		$('section.deals').toggleClass('open');
	
	
	});
	
	
	
	// $('.gform_wrapper ul li').append('<img class="icon" src="wp-content/themes/blinkreviews/images/comment.svg"/>');



}); // document ready