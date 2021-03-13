function popup(text) {
    // Show the popup/alert using the popup's parent element
    $(".popup-modal").parent().show();

    // Change the text
    $(".popup-modal p").text(text);

    // Close the modal when the button is clicked
    $(".popup-modal button").click(() => {
        $(".screen-mask").hide();
    });
}

function conf(text) {
    // Show the popup/alert using the popup's parent element
    $(".confirm-modal").parent().show();

    // Change the text
    $(".confirm-modal p").text(text);

    $(".confirm-modal #cancel").click(() => {
        $(".screen-mask").hide();
    });
    $(".confirm-modal #ok").click(() => {
        $(".screen-mask").hide();
    });
}
