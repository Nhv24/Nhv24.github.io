// Generate on document load
document.addEventListener("DOMContentLoaded", generate);

colors = [];

// Function to tell if color is too dark

// Code taken and modified from here:
// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
function changecolor(color, div) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const p = div.children[0];
    if (((r * 299) + (g * 587) + (b * 114)) / 1000 > 155) {
        // Too light of a color
        p.style.color = 'black';
    }
    else {
        // Dark
        p.style.color = 'white';
    }
    p.innerHTML = color;
}

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

        // Change the text color accordingly
        changecolor(clr, div);
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
