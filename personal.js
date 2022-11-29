const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
    menuBtn.classList.add('open');
menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    menuOpen = false;
}
})


function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "links") {
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}