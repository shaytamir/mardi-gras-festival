import "./logos.js";
import { startLogosSlider, createLogoBoxes } from "./logos.js";
import "./sponsersEditor.js";
import { editorLi } from "./sponsersEditor.js";
import "./sponsers.js";
import { newSponser, renderSponsersList } from "./sponsers.js";

/* func to call json of sponsers , and work with it */
async function myFetch() {
  let response = await fetch("modules/objects/sponsers.json");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
}

myFetch()
  .then((sponserss) => {
    console.log(1);
    /*  create new sponser editor to nav ul list */
    editorLi();
    /* sponser constructor   from json to arr */
    sponserss.forEach((sponser) => {
      newSponser(sponser);
    });
  })
  .then(() => {
    /* render sponsers list to html */
    renderSponsersList();
    /* create 5 html boxes for the logos */
    createLogoBoxes();
    /* renders logos list to html  */
    startLogosSlider();
  })
  .catch((e) => console.log(e));

/*close navbar on Page & Caruesel click  */
document.querySelector(".container").addEventListener("click", () => {
  document.getElementById("navbarSupportedContent").classList.remove("show");
});
if (document.getElementById("caruesel1")) {
  document.getElementById("caruesel1").addEventListener("click", () => {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  });
}
