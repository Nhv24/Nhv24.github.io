let n = 0;

window.onscroll = () => {
    // No scroll or scroll up
    if (window.scrollY <= 0)
    {
        document.querySelector('#navigation').style.boxShadow = 'none';
        // Reset n
        n = 0;
    }
    else {
        // If n is less than some number
        if (n < 20)
        {
            document.querySelector('#navigation').style.boxShadow = `3px 3px ${n}px #2f4f4f`;
            // Increment
            n++;
        }
    }
}
