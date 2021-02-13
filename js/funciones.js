jQuery(document).ready(listo);

function listo()
{
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");

	});

	jQuery("header .container nav a").click(function(){

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");

		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top - 76
		})
	})
}
$(document).ready(function(){ //Hacia arriba
	irArriba();
  });
  
  function irArriba(){
	$('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
	$(window).scroll(function(){
	  if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
	});
	$('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }

  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );