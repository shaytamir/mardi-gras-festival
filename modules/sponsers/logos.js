import { sponsersArr, callRenderSponsersBox } from "./sponsers.js";

/********** create logos container************ */
export function createLogoBoxes() {
  const logos_div = document.createElement("div");
  logos_div.id = "logos_container";
  logos_div.className = "logos_container container";
  document.getElementById("main_container").appendChild(logos_div);
}

/****  await sponsers async** then: *** */
/* run logo's carousel */
let startInterval = null;
export function startLogosSlider() {
  count = 0;
  // check = true;
  startInterval = setInterval(runLogos, 2000);
  runLogos();
}
/* stop logos interval func */
export function stopInterval() {
  clearInterval(startInterval);
}

/*append logos imgs to html 5 logo boxs  */
let count = 0; /* loop counter */
let check = true; /* changes after 1 interval */
function runLogos() {
  let boxNum = count;
  /* after first interval */
  if (check === false) {
    for (let num = 1; num < 6; num++) {
      const logoRemove = document.getElementById("box" + num);
      logoRemove.remove();
    }
  }
  check = false;
  /* create logo * 5 with change every interval */
  for (let num = 1; num < 6; num++) {
    const box = document.createElement("div");
    box.id = "box" + num;
    box.className = "box";
    document.getElementById("logos_container").appendChild(box);
    const img = document.createElement("img");
    img.alt = "sponsers.logo";
    box.appendChild(img);
    /* gives html box the sponser from sponsers list */
    img.src = sponsersArr[boxNum].logo;
    img.alt = sponsersArr[boxNum].name;
    img.addEventListener("click", () => {
      callRenderSponsersBox(img.alt);
    });
    boxNum++;
    if (boxNum === sponsersArr.length) {
      boxNum = 0;
    }
    check = false;
  }
  count++;
  if (count === sponsersArr.length) {
    count = 0;
  }
}
