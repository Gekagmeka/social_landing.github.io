$('.sub-menu').on('click', function(){
	$('.sub-list, .fa-angle-down').toggleClass('active');
});

$('.burger-button, .item .link, .sub-link').not('.sub-menu').on('click', function(){
	$('.navigation, .burger-button').toggleClass('active');
	$('.fa-angle-down, .sub-list').removeClass('active');
	$('body').toggleClass('lock');
});