function popup(text) {
    // Set body to overflow: hidden
    $("body").css("overflow", "hidden");

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
    // Set body to overflow: hidden
    $("body").css("overflow", "hidden");

    // Show the popup/alert using the popup's parent element
    $(".confirm-modal").parent().show();

    // Change the text
    $(".confirm-modal p").text(text);

    $(".confirm-modal #cancel").click(() => {
        return false;
    });
    $(".confirm-modal #ok").click(() => {
        return true;
    });
}
