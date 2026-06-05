document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

window.addEventListener('load', () => {
    console.log("King Edward Portfolio Loaded");
});