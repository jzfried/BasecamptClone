$(document).ready(function(){
	$('#child1').mouseenter(function(){
        var arrowImage = $(this).prepend('img src="images/arrow-left.png" alt="highrise"')
                .prop('src', 'images/arrow-left.png')
                .css('position', 'relative')
                .css('right', '10px')
                .css('top', '10px');
        $(this).prepend(<h1>Basecamp is the project management tool you wish you had on your last project.</h1>);
        $(this).prepend(<h3>Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h3>);
});
});

	$('#child1').mouseleave(function(){
		$(this).prepend(remove);
	};

$(document).ready(function(){
	$('#child2').mouseenter(function(){
        $(arrowImage);
});
});

$(document).ready(function(){
	$('#child3').mouseenter(function(){
        $(this).prepend('img src="images/arrow-right.png" alt="highrise"')
                .prop('src', 'images/arrow-right.png')
                .css('position', 'relative')
                .css('right', '10px')
                .css('top', '10px');
});
});