$(document).ready(function(){
	$('#child1').mouseenter(function(){
        $(this).prepend('img src="images/arrow-left.png" alt="highrise"');
                .prop('src', 'images/arrow-left.png');
                .css('position', 'relative');
                .css('right', '10px');
                .css('top', '10px');
});