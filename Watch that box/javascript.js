document.getElementById("grow").addEventListener("click", function() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
});
document.getElementById("blue").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("fade").addEventListener("click", function() {
    document.getElementById("box").style.opacity = "50%";
});
document.getElementById("angle").addEventListener("click", function() {
    document.getElementById("box").style.transform = "rotate(45deg)"
});
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.transform = "rotate(0deg)"
});
