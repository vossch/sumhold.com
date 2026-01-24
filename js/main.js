$(document).ready(function() {
	prevHeight = $(window).height();
	updateLayout();
	$("#submit").click(function(){
		$.post("/sendEmail.php", { name: $('#name').val(), email: $('#email').val(), subject: $('#subject').val(), message: $('#message').val() });
		$('#name').val("");
		$('#email').val("");
		$('#subject').val("");
		$('#message').val("");
		alert("message sent");
		return false;
	});
});

$(window).resize(function(){
	updateLayout();
});

$(window).scroll(function(){
	updateSelection();
});

function updateSelection()
{
	var h = $(window).height();
	var s = $(window).scrollTop();
	var i = Math.round(s/h);
	
	if(i != prevI)
	{
		$('.navbar-selected').addClass('navbar-deselected').removeClass('navbar-selected');
		if(i==0)
			$("#i").addClass('navbar-selected').removeClass('navbar-deselected');
		else if(i==1)
			$("#a").addClass('navbar-selected').removeClass('navbar-deselected');
		else if(i==2)
			$("#b").addClass('navbar-selected').removeClass('navbar-deselected');
		else if(i==3)
			$("#c").addClass('navbar-selected').removeClass('navbar-deselected');
		else if(i>3)
			$("#d").addClass('navbar-selected').removeClass('navbar-deselected');
	}
	prevI = i;
}

var prevHeight;
var prevI =0;

function updateLayout()
{
	var h = $(window).height()/prevHeight;
	var marginTop = Math.max($(window).height() - 450,0) * 0.5;
	
	$('.slide').height($(window).height() - marginTop);
	$('.slide').css('padding-top', marginTop - 25);
	$('ul').css('margin-top', marginTop);
	
	$(window).scrollTop(h * $(window).scrollTop());
	prevHeight = $(window).height();
}

function jumpTo( target ) {
    var topoffset = 30;
    var speed = 500;
    var destination = jQuery( target ).offset().top - topoffset;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        window.location.hash = target;
    });
    return false;
}