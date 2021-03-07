// Generate on document load
document.addEventListener("DOMContentLoaded", generate);

function pastelColors(){
    const r = (Math.round(Math.random()* 127) + 127).toString(16);
    const g = (Math.round(Math.random()* 127) + 127).toString(16);
    const b = (Math.round(Math.random()* 127) + 127).toString(16);
    return '#' + r + g + b;
}


colors = [];

// Returns mixed hex representation of color
function mix(r, b, g, r2, g2, b2) {
    return '#' + Math.floor((r + r2) / 2).toString(16) + Math.floor((g + g2) / 2).toString(16) + Math.floor((b + b2) / 2).toString(16);
}

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

// Function to generate random number less than 256
function getrand() {
    return Math.floor(Math.random() * 256);
}

function generate(str) {
    clrDivs = document.querySelectorAll('.clr');

    // Randomly generate 1st color
    const r = getrand();
    const g = getrand();
    const b = getrand();

    // Change the colors
    clrDivs.forEach((div, index) => {
        if (str === "mix") {
            clr = mix(r, b, g, getrand(), getrand(), getrand());
        }
        else {
            clr = pastelColors();
        }
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
