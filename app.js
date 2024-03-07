$(document).ready(function () {
	console.log("Let's get ready to party with JQuery");
});

$("img").addClass("image-center");

$("p:last").remove();

const randomFontSize = Math.floor(Math.random() * 101);
$("#title").css("font-size", randomFontSize + "px");

$("ol").append("<li>I love Lists</li>");

$("aside").html(
	"<p>Lists, oh lists! The so-called 'organized' chaos that pretends to bring order to our lives. I mean, who needs a sequential arrangement of thoughts when you can have the unruly dance of chaos? Lists are like the overenthusiastic friend who insists on telling you what to do in a step-by-step fashion, as if life were an IKEA manual. I'd rather navigate the labyrinth of my thoughts without a GPS, thank you very much. Lists may be the superheroes of organization, but I'll stick with the exhilarating rollercoaster of forgetting what I was supposed to do next. Because, let's face it, spontaneity is the real spice of life – not some orderly, neatly bulleted checklist!</p>"
);

function updateBackgroundColor() {
	const red = $("#red").val();
	const blue = $("#blue").val();
	const green = $("#green").val();

	$("body").css(
		"background-color",
		"rgb(" + red + "," + green + "," + blue + ")"
	);
}

$("#red, #blue, #green").on("input", updateBackgroundColor);

$("img").on("click", function () {
	$(this).remove();
});
