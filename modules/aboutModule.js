import "./sponsers/sponsersMain.js";

/* black screen */
document.getElementById("black_div").addEventListener("click", () => {
  document.getElementById("black_div").style.display = "none";
});
/* big images */
document.getElementById("img_about1").addEventListener("click", () => {
  document.getElementById("black_div").style.display = "block";
  document.getElementById("big_img_about").src = "img/img/gallery/50_big.jpg";
  document.getElementById("big_img_about").alt = "indien traditional clothing";
});
document.getElementById("img_about2").addEventListener("click", () => {
  document.getElementById("black_div").style.display = "block";
  document.getElementById("big_img_about").src = "img/img/gallery/46_big.jpg";
  document.getElementById("big_img_about").alt = "indien traditional clothing";
});
