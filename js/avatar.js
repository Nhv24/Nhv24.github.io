function randomimg(max = 5) {
    var imgnum = Math.floor(Math.random() * max);

    // Find the correct extension
    if (imgnum === 0) {
        return `avatar${imgnum}.jpg`;
    }
    else {
        return `avatar${imgnum}.png`;
    }
}
