<?php 
	
	/* Template Name: Home */
	
	get_header(); ?>


<?php  get_template_part( 'homepage_template_parts/section', 'preloader' );?>
<?php  get_template_part( 'homepage_template_parts/section', 'stars' );?>
<?php  get_template_part( 'homepage_template_parts/section', 'deals' );?>
<?php  get_template_part( 'homepage_template_parts/section', 'form' );?>
<?php  get_template_part( 'homepage_template_parts/section', 'location' );?>


<?php get_footer(); ?>
