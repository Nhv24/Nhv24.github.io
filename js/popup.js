function popup(text) {
    const mask = $(".screen-mask");
    const modal = $('.popup-modal');
    const modal_p = $(".popup-modal p");
    const btn = $(".popup-modal button");


    // Set body to overflow: hidden
    $("body").css("overflow", "hidden");

    // Show the popup/alert
    mask.show();

    // Change the text
    modal_p.text(text);

    // Close the modal when the button is clicked
    btn.click(() => {
        mask.hide();
    });
}
