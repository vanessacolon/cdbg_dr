$(document).ready(() => {
	const watcher = new Watch($("#spy"));

	watcher.inView(() => {
		$(".video-container.sticky").removeClass("sticky");
	});

	watcher.outView(() => {
		$(".video-container").addClass("sticky");
	});

	console.log(watcher);

});

$(document).ready(function () {
	$("#toggle").click(function () {
		var elem = $("#toggle").text();
		if (elem == "Leer más") {
			//Stuff to do when btn is in the read more state
			$("#toggle").text("Leer menos");
			$("#text").slideDown();
		} else {
			//Stuff to do when btn is in the read less state
			$("#toggle").text("Leer más");
			$("#text").slideUp();
		}
	});
});
//Puerto Rico con luz y sin luz //
$(document).ready(function () {
	$("img.light.on").on("click", function (e) {
		e.preventDefault();

		$("body").addClass("light-off");
	});

	$("img.light.off").on("click", function (e) {
		e.preventDefault();

		$("body").removeClass("light-off");
	});
});


//Get the button //
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button //
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document //
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// Ingresos bajo o moderado //
function myFunction() {
	var age, voteable;
	age = Number(document.getElementById("age").value);
	if (isNaN(age)) {
		voteable = "Input is not a number";
	} else {
		voteable = (age < 18050) ? "Extremadamente bajo o bajo" : "Moderado o medio";
	}
	document.getElementById("demo").innerHTML = voteable;
}
// Menu en hamburger
$(document).ready(function ($) {
	$(".hamburger").click(function () {
		$(".nav").slideToggle(200);
	});

	$(".exit").click(function () {
		$(".helpWrap").fadeOut(200)
	});

	$(".help").click(function () {
		$(".helpWrap").fadeIn(200)
	});

	$(".btn").click(function () {
		// Get the id of the button just clicked on
		var id = $(this).attr('id');

		// Make sure whatever button had the 'active' class (Which we use to style in CSS) doesn't have it anymore
		$(".btn").removeClass('active');
		// Add the active class to the button we've just clicked on
		$(this).addClass('active');

		// Fade out whatever image is currently visible
		$(".image").fadeOut(200);
		// Use the hash symbol to denote that we're selecting by an id, then use the id of the button we just clicked on plus the string '-img' to get the id of the matching image and fade that in
		$("#" + id + "-img").fadeIn(200);
	});

});