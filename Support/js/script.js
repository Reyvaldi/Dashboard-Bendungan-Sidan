function myfunction() {
    var header = document.getElementsByClassName("navbar-nav")[0];
    var btns = header.getElementsByClassName("nav-link");
    document.getElementById("demo").innerHTML = btns[i];

    var deactivateid = document
        .getElementsByClassName("active")[0]
        .getAttribute("id");
    for (var i = 0; i < 5; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            var activeid = document
                .getElementsByClassName("active")[0]
                .getAttribute("id");
            document
                .getElementsByClassName(activeid)[0]
                .classList.add("active");
        });
    }

    document.getElementsByClassName(deactivateid)[0].classList.remove("active");
}
