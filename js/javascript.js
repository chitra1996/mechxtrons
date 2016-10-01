function show_college() {
	$("#mainNavBarli a").click(function(){
	$('#mainNavBarli a').removeClass('active');
	$(this).addClass('active');
	var tab = $(this).attr('data-tabs');
	$(".tab").hide();
	$(tab).show();
	});	
// body...
}
