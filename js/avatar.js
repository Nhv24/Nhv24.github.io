function randomimg(max = 5) {
    let imgs = ["images/avatar0.jpg", "images/avatar1.png", "images/avatar2.png", "images/avatar3.png", "images/avatar4.png"];
    let img = imgs[Math.floor(Math.random() * imgs.length)];

    document.querySelector('.rounded-img.avatar').src = img;
}

document.addEventListener("DOMContentLoaded", randomimg);
