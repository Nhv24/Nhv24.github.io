function popup(text) {
	const screen_mask = $(".screen-mask");
    // Set body to overflow: hidden
    $("body").css("overflow", "hidden");

    // Show the popup/alert
    screen_mask.show();

    // Change the text
	$(".popup-modal p").text(text);

    // Close the modal when the button is clicked
    $(".popup-modal button").click(() => {
        screen_mask.hide();
    });
}
