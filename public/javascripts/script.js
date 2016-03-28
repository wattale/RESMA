$(document).ready(function () {
	$("div#tray-bunch ul li").hover(function(){
        $(this).find(".lid").animate({top: '300px'});
        $(this).find("#intro").fadeIn();
    }, function () {
    	$(this).find(".lid").animate({top: '390px'});
    	$(this).find("#intro").fadeOut();
    }); 
});