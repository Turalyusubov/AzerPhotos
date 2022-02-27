
window.onscroll = function () { scrollFunction() };
window.addEventListener("scroll", reveal);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "rgba(17, 18, 22, 1)";
        document.getElementById("navbar").style.boxShadow = "0px 0px 10px 0px rgb(0, 0, 0)";
        document.getElementById("navbar").style.transition = "all .25s";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}