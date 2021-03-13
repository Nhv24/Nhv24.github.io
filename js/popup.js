function setup() {
    // Set body to overflow: hidden
    $("body").css("overflow", "hidden");

    // Show the popup/alert using the popup's parent element
    $(".popup").parent().show();
}

function popup(text) {
    setup();
    // Change the text
    $(".popup-modal p").text(text);

    // Close the modal when the button is clicked
    $(".popup-modal button").click(() => {
        $(".screen-mask").hide();
    });
}

function conf(text) {
    setup();

    // Change the text
    $(".confirm-modal").text(text);

    $(".confirm-modal #cancel").click(() => {
        return false;
    });
}
