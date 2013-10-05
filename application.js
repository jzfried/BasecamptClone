$(document).ready(function(){

    var arrowImageRight = $('<img src="images/arrow-left.png" alt="highrise">');

    $('#child1').mouseenter(function(){
        $(this).append(arrowImageRight);
        $('arrowImageRight').addClass('arrowImageRight');
        $('h1').replaceWith("<h2>Basecamp is the project management tool you wish you had on your last project.</h2>");
        $('h3').replaceWith("<h4>Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h4>");
    });

    $('#child1').mouseleave(function(){
        arrowImageRight.remove();
        $('h2').replaceWith("<h1>Making collaboration productive and enjoyable for people every day</h1>")
        $('h4').replaceWith("<h3>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h3>");
    });
});

$(document).ready(function(){

	var arrowImageRight = $('<img src="images/arrow-left.png" alt="highrise">');

    $('#child2').mouseenter(function(){
        $(this).append(arrowImageRight);
        $('arrowImageRight').addClass('arrowImageRight');
        $('h1').replaceWith("<h2>Highrise remembers the important things about people you'd normally forget.</h2>");
        $('h3').replaceWith("<h4>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</h4>");
    });

    $('#child2').mouseleave(function(){
        arrowImageRight.remove();
        $('h2').replaceWith("<h1>Making collaboration productive and enjoyable for people every day</h1>")
        $('h4').replaceWith("<h3>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h3>");
    });
});

$(document).ready(function(){

	var arrowImageLeft = $('<img src="images/arrow-right.png" alt="highrise">');

    $('#child3').mouseenter(function(){
        $(this).append(arrowImageLeft);
        $('h1').replaceWith("<h2>Campfire helps teams work together over the web in real-time.</h2>");
        $('h3').replaceWith("<h4>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.</h4>");
    });

    $('#child3').mouseleave(function(){
        arrowImageLeft.remove();
        $('h2').replaceWith("<h1>Making collaboration productive and enjoyable for people every day</h1>")
        $('h4').replaceWith("<h3>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h3>");
    });
});
