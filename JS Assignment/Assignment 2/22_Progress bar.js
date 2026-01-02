var progressBar = document.getElementById("myBar");

var totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {

var progress = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});
