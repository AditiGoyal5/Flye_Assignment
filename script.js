
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("contactForm"); 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
form.onsubmit = function(event) {
    event.preventDefault(); 
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

