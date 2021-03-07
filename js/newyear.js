document.addEventListener("DOMContentLoaded", function() {
    const date = new Date();
    const text = document.querySelector('h1');
    if (date.getMonth() === 0 && date.getDate() === 1)
    {
        text.innerHTML = "Yes";
    }
    else {
        text.innerHTML = "No";
    }
});
