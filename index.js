$(".harmburger").on("click", (function(){
	$(".topnav2-mid").fadeToggle();
	$(".bar1").toggleClass("rotate45");
	$(".bar2").toggleClass("delete");
	$(".bar3").toggleClass("rotate-45");
	$("body").toggleClass("stop-scroll");
	$(".overlay").toggleClass("show-overlay");
}));


if (window.innerWidth <= 992){
$(".phone-background").attr("src", "images/bg-intro-mobile.svg");
}
else{
	$(".phone-background").attr("src", "images/bg-intro-desktop.svg");
}
