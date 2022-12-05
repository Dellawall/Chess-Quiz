function menuclick11() {
    var x = document.getElementById("menuclick");
    if (x.className === "nav-left") {
        x.className += " responsive";
        /*change nav class to class.responsive*/ 
    } else {
        x.className = "nav-left";
    }
}
