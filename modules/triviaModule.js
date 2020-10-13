import "./sponsers/sponsersMain.js";
import "./trivia2Html.js";
import { triviaArr } from "./objects/triviaQ.js";
let answerCounter = 0;
let scores = 0;
let scoreCount = 0;

document.querySelector(".answers").innerHTML =
  "Questions ansewered : " + answerCounter;
document.querySelector(".score").innerHTML = "Your score is: " + scores;
/* submit trivia */
document.getElementById("submit_input").addEventListener("click", submitFunc);
function submitFunc(e) {
  e.preventDefault();

  scores = 0;

  scoreCount = 0;
  let redArr = [];
  let greenArr = [];

  for (let i = 0; i < triviaArr.length; i++) {
    const name = document.getElementsByName(triviaArr[i].name);
    for (let radio in name) {
      /* if a radio input for each section is checket  */
      if (name[radio].checked === true) {
        /* if answer is true / false */
        if (radio == triviaArr[i].aPosition) {
          document.getElementById("score_img" + i).src = "img/img/true.png";
          document.getElementById("score_img" + i).alt = "Correct image";
          greenArr.push(`label-${triviaArr[i].name}-${radio}`);
          /* appand right answer */
          document.getElementById("h4_" + (i + 1)).innerHTML =
            "<span>The right answer is : </span>" +
            name[triviaArr[i].aPosition].value;
          scores++;
        } else {
          document.getElementById("score_img" + i).src = "img/img/false.png";
          document.getElementById("score_img" + i).alt = "unCorrect image";

          redArr.push(`label-${triviaArr[i].name}-${radio}`);
          /* appand right answer */
          document.getElementById("h4_" + (i + 1)).innerHTML =
            "<span>The right answer is : </span>" +
            name[triviaArr[i].aPosition].value;
        }
        scoreCount++;
      }
      /* if all questions answered : */
      if (scoreCount === triviaArr.length) {
        /* removr submit Click-attr  */
        document
          .getElementById("submit_input")
          .removeEventListener("click", submitFunc);
        document
          .getElementById("submit_input")
          .addEventListener("click", (e) => {
            e.preventDefault();
          });
        // console.log(namesArr[0].length);
        /*loop to display score-images  */
        for (let n = 0; n < triviaArr.length; n++) {
          document.getElementById("score_img" + n).style.display = "block";
        }
        /*display answer  */
        for (let m = 1; m < triviaArr.length + 1; m++) {
          document.getElementById("corect_div" + m).style.display = "block";

          document.getElementById("h4_" + m).style.display = "block";
        }
        /* for correct - green color */
        for (let item in greenArr) {
          document.getElementById(greenArr[item]).style.color = "#8cbf3f";
        }
        /* for not-correct - red color */
        for (let item in redArr) {
          document.getElementById(redArr[item]).style.color = "red";
        }

        document.getElementById("answers").style.color = "#8cbf3f";
        document.getElementById("score").style.color = "#8cbf3f";
        scores > 5
          ? (document.querySelector(".score").innerHTML =
              "Your score is: " + scores)
          : (document.querySelector(".score").innerHTML =
              "Your score is: <span>" + scores + "</span>");
      } else {
        document.getElementById("answers").style.color = "red";
      }

      document.querySelector(".answers").innerHTML =
        "Questions ansewered :   " + scoreCount + " / " + triviaArr.length;
    }
  }

  e.preventDefault();
}

/* reset trivia */
document.getElementById("reset_input").addEventListener("click", () => {
  location.reload();
});
document.getElementById("sctollTop_input").addEventListener("click", () => {});
