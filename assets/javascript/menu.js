function scrollToElement(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
}

document.querySelector(".menu").addEventListener("click", function() {
    document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".menu-screen").classList.remove("active");
});

let links = document.querySelectorAll(".menu-screen a");


links.forEach(link => {
    link.addEventListener('click', function(ev) {
        document.querySelector(".menu-screen").classList.remove("active");

        let paths = this.href.split("/");

        console.log(paths);

        const selector = paths[paths.length - 1];

        console.log(selector);

        if (window.scrollTo) ev.preventDefault()

        scrollToElement(document.querySelector(selector));

        return !!window.scrollTo;

    })
});