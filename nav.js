window.onscroll = () => {
    if (window.scrollY === 0)
    {
        document.querySelector('#navigation').style.boxShadow = 'none';
    }
    else {
        document.querySelector('#navigation').style.boxShadow = '3px 3px 5px lightgray';
    }
}
