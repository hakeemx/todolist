//Check off specific todos by clicking
$('ul').on("click","li",function () {
	$(this).toggleClass('completed');	
})

//Click X to delete Todo
$("ul").on("click","span",function(event) {
	/* Act on the event */
	$(this).parent().fadeOut(500,function() {
		// body...
		$(this).remove()
	});
	event.stopPropogation();
});
$("input[type='text']").keypress(function(event) {
	/* Act on the event */

	//If the user hit the enter button
	if (event.which === 13) {
		//Get text input text
		var todoText = $(this).val();

		//Clear input
		$(this).val('');
		//create new li and add to ul
		$("ul").append('<li><span><i class="fa fa-trash"></i></span> '+todoText+'</li>')
	}
});

$(".fa-plus").click(function(event) {
	/* Act on the event */
	$("input[type='text']").fadeToggle();
});