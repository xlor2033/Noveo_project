$(function() {

	//$(".toggle-menu").click(function() {
		//$(this).toggleClass("on");
	//});
	$(".active").click(function(){
		$("html, body").animate({ scrollTop: $(".main-head").height()+80},"slow");
		return false;
	});

	$(".click-about").click(function(){
		$("html, body").animate({ scrollTop: $(".hobbies-img").height()}, "slow");
		return false;
	});
	$(".click-contact").click(function(){
		$("html, body").animate({ scrollTop: $(".main-footer").height()}, "slow");
		return false;
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
