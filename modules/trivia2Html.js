import { triviaArr } from "./objects/triviaQ.js";
function trivia() {
  /* for num of questions */
  for (let q in triviaArr) {
    let num = triviaArr[q].num;
    /* questions div */
    const qDiv = document.createElement("div");
    qDiv.className = "q q" + num;
    document.getElementById("trivia_form").appendChild(qDiv);
    /* score image */
    const scoreImg = document.createElement("img");
    scoreImg.id = "score_img" + q;
    scoreImg.className = "score_img";
    scoreImg.src = "";
    scoreImg.alt = "";
    qDiv.appendChild(scoreImg);
    /* question*/
    const scoreH4 = document.createElement("h4");
    scoreH4.innerHTML = num + ". " + triviaArr[q].q;
    qDiv.appendChild(scoreH4);
    /* div for inputs and corect answer */
    const mainDiv = document.createElement("div");
    mainDiv.className = "inputs_correct_div";
    qDiv.appendChild(mainDiv);
    const flexDiv = document.createElement("div");
    flexDiv.className = "flex";
    mainDiv.appendChild(flexDiv);
    const p = document.createElement("p");
    p.className = "flex";
    flexDiv.appendChild(p);
    /* input radio options */
    for (let r = 0; r < triviaArr[q].options.length; r++) {
      let rr = r + 1;
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = triviaArr[q].name;
      radio.id = "q" + triviaArr[q].num + "-" + rr;
      radio.value = triviaArr[q].options[r];
      p.appendChild(radio);

      const label = document.createElement("label");
      label.id = "label-" + triviaArr[q].name + "-" + r;
      label.for = triviaArr[q].options[r];
      label.innerHTML = triviaArr[q].options[r];
      p.appendChild(label);
      const br = document.createElement("br");
      label.appendChild(br);
    }
    /* answer h4 */
    const aH4Div = document.createElement("div");
    aH4Div.className = "h4_div";
    flexDiv.appendChild(aH4Div);
    const aH4 = document.createElement("h4");
    aH4.id = "h4_" + triviaArr[q].num;
    aH4Div.appendChild(aH4);
    /* corect answer info */
    const corect = document.createElement("div");
    corect.id = "corect_div" + triviaArr[q].num;
    corect.className = "corect_div";
    corect.innerHTML = triviaArr[q].a;
    mainDiv.appendChild(corect);
  }
  /* btn div */
  const btnDiv = document.createElement("div");
  btnDiv.className = "buttons";
  document.getElementById("trivia_form").appendChild(btnDiv);
  /* reset btn */
  const reset = document.createElement("input");
  reset.id = "reset_input";
  reset.type = "button";
  reset.value = "reset";
  btnDiv.appendChild(reset);
  /* pageUp btn */
  const pageUpA = document.createElement("a");
  pageUpA.href = "#pageTrivie";
  btnDiv.appendChild(pageUpA);
  const pageUp = document.createElement("input");
  pageUp.id = "sctollTop_input";
  pageUp.type = "button";
  pageUpA.appendChild(pageUp);
  /* submit btn */
  const submit = document.createElement("input");
  submit.id = "submit_input";
  submit.type = "submit";
  submit.value = "submit";
  submit.className = "u-full-width";
  btnDiv.appendChild(submit);
}

trivia();
