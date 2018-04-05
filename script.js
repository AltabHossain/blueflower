function myFunction() {
    var x = document.getElementById("myMain-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
