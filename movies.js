const resultsArray = [];

$("#movie-form").submit(function (event) {
	event.preventDefault();

	const title = $("#title").val();
	const rating = parseInt($("#rating").val(), 10);

	if (title.length > 2) {
		const result = $("<div>").html(
			"<strong>Title:</strong>" +
				title +
				"<br><strong class='ratings'>Rating:</strong>" +
				"<span class='rating-value'>" +
				rating +
				"</span>"
		);

		const removeBtn = $("<button>")
			.text("Remove Rating")
			.on("click", function () {
				const index = resultsArray.indexOf(result);
				if (index !== -1) {
					resultsArray.splice(index, 1);
				}
				result.remove();

				updateSortedResults();
			});
		result.append(removeBtn);
		resultsArray.push(result);

		updateSortedResults();
	} else {
		alert("Title must have more than 2 letters");
	}
});

function updateSortedResults() {
	resultsArray.sort(function (a, b) {
		const ratingAElement = $(a)
			.find(".ratings")
			.next(".rating-value");
		const ratingBElement = $(b)
			.find(".ratings")
			.next(".rating-value");

		const ratingA = parseInt(
			ratingAElement.text().trim(),
			10
		);
		const ratingB = parseInt(
			ratingBElement.text().trim(),
			10
		);

		return ratingB - ratingA;
	});

	$("#results-container").empty().append(resultsArray);
}
