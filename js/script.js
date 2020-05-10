$(document).ready(function checkWidth() {
  	if ($(window).width() <= 991) {  
		$(".sidebar__toggle").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("open");
			$(".main").toggleClass("sidebar__active");
		});	
	 } 
	 $(window).resize(checkWidth);	
});

$(document).ready(function(){
	$(".filter-wrap").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".filter-content").toggle();
	});
	$(".close").click(function(){
		$(".filter-content").hide();
	});
	$('.filter-content').click( function(event) {      
        event.stopPropagation();       
    });
	$('body').click(function(){
		$('.filter-content').hide();
	});
	

  var allPanels = $('.nav-drop').hide();   
  $('.item-nav > a').click(function() {
    allPanels.slideUp();
    $(this).next().slideDown();
    return false;
	});
	
});

