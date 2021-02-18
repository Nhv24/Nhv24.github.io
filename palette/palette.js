colors = [];

function generate() {
    // Change the colors
    document.querySelectorAll('.clr').forEach(div => {
        let clr = '#' + Math.random().toString(16).substr(-6);
        div.style.backgroundColor = clr;
        colors.push(clr);
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
