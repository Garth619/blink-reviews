jQuery(document).ready(function($){$(".star_wrapper span.star_icon").on("click",function(a){$(".star_wrapper span.star_icon").removeClass("active"),$(this).addClass("active"),$(this).prevAll().addClass("active")}),$(".deals_tab").on("click",function(a){$("section.deals").toggleClass("open")})});