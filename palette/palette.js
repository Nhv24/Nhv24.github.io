// Generate on document load
document.addEventListener("DOMContentLoaded", generate)

colors = [];

function generate() {
    clrDivs = document.querySelectorAll('.clr');
    // Change the colors
    clrDivs.forEach((div, index) => {
        let clr = '#' + Math.random().toString(16).substr(-6);
        div.style.backgroundColor = clr;
        if (colors.length < clrDivs.length) {
            colors.push(clr);
        }
        else {
            colors[index] = clr;
        }
    });
}

function copy(n) {
    if (colors[n] !== undefined)
    {
        var i = document.createElement("input");
        document.body.appendChild(i);
        i.value = colors[n];
        i.select();
        document.execCommand("copy");
        document.body.removeChild(i);
    }
}
