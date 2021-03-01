// switch para el boton de la esquina superior
function hamburgerActivation() {
    var hamb = document.querySelector(".hamburger");
    var menu = document.querySelector(".menu");
    var btn = document.querySelectorAll(".menu-btn");
    if (hamb.className == "hamburger") {
        hamb.className = "hamburger is-active";
        menu.className = "menu menu-active";
        btn[0].className = "menu-btn btn-active1s";
        btn[1].className = "menu-btn btn-active1s5";
        btn[2].className = "menu-btn btn-active2s";
        btn[3].className = "menu-btn btn-active2s5";
        btn[4].className = "menu-btn btn-active3s";
        btn[5].className = "menu-btn btn-active3s5";
    } else {
        menu.className = "menu";
        hamb.className = "hamburger";
        rw.forEach(row => {
            row.className = "rw";
        });
    }
}