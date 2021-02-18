function generate() {
    // Change the colors
    document.querySelectorAll('.clr').forEach(div => {
        div.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);;
    });
}