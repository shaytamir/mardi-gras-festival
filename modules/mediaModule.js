import { imgArr } from "./objects/mediaImgsArray.js";
import "./sponsers/sponsersMain.js";

/* creates imgs from img Array */
function createImg() {
  for (let img in imgArr) {
    const newImgDiv = document.createElement("div");
    newImgDiv.className = "img_div";
    document.querySelector(".gallery_box").appendChild(newImgDiv);

    const newImg = document.createElement("img");
    newImg.id = "img" + img;
    newImg.alt = "Mardi gras - festival image";
    newImg.className = "img_gallery";
    newImg.src = imgArr[img] + "_small.jpg";
    newImg.addEventListener("click", openBigImg);
    newImgDiv.appendChild(newImg);
  }
}
createImg();
/* big image show */
let counterImg = 0;
function openBigImg() {
  counterImg = this.id[3]; /* only hte img index num */
  // console.log(counter);
  document.getElementById("big_img").src = imgArr[counterImg] + "_big.jpg";
  document.getElementById("big_img").alt = "Mardi gras - festival image";
  document.getElementById("black_div").style.display = "block ";
  document.getElementById("big_img_div").style.display = "flex ";
  /* header display Off */
  document.querySelector("header").style.display = "none";
}

/* close big img gallery */
document.getElementById("black_div").addEventListener("click", () => {
  counterImg = 0;
  document.getElementById("black_div").style.display = "none ";
  document.getElementById("big_img_div").style.display = "none ";

  /* header display On */
  document.querySelector("header").style.display = "flex";
});

/* gallery - next img func */
document.getElementById("img_next").addEventListener("click", nextImg);
function nextImg() {
  counterImg++;
  if (counterImg === imgArr.length) {
    counterImg = 0;
  }
  document.getElementById("big_img").src = imgArr[counterImg] + "_big.jpg";
}
/* gallery - back img func */
document.getElementById("img_back").addEventListener("click", backImg);
function backImg() {
  counterImg--;
  if (counterImg < 0) {
    counterImg = imgArr.length - 1;
  }
  document.getElementById("big_img").src = imgArr[counterImg] + "_big.jpg";
}
