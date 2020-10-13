export let sponsersArr = [];

/* restarts the sponsers counter */
export function restartSpCounter() {}
/* sponsers create class */
class Sponsers {
  constructor(_name, _content, _logo, _imgs, _link) {
    this.name = _name;
    this.content = _content;
    this.logo = _logo;
    this.imgs = _imgs;
    this.link = _link;
  }
}
/* creates new sponser */
export function newSponser(sponser) {
  const { sname, scontent, slogo, simgs, slink } = sponser;
  sponser = new Sponsers(sname, scontent, slogo, simgs, slink);
  sponsersArr.push(sponser);
}
/* renders obj of sponsers to navbar sponsers list */
export function renderSponsersList() {
  for (let sp in sponsersArr) {
    const newSponserLi = document.createElement("div");
    newSponserLi.className = "spons dropdown-item";
    newSponserLi.id = "spons" + sp;
    newSponserLi.innerHTML = sponsersArr[sp].name;
    document.getElementById("sponsers_div").appendChild(newSponserLi);
    /* new navbar sponser click event */
    newSponserLi.addEventListener("click", () => {
      sponsersArr[sp].renderSponserBox();
      document.querySelector("header").style.display = "none";
    });
  }
}
/* renders sponser on logo click  */
export function callRenderSponsersBox(sp) {
  for (let i in sponsersArr) {
    if (sp === sponsersArr[i].name) {
      sponsersArr[i].renderSponserBox();
      document.querySelector("header").style.display = "none";
      return;
    }
  }
}
/* creates sponsers pages from sponser-array*/
Sponsers.prototype.renderSponserBox = function () {
  /* black screen create*/
  const sponserBlackDiv = document.createElement("div");
  sponserBlackDiv.id = "sponser_black_div";
  sponserBlackDiv.style.display = "block";
  document.querySelector("body").appendChild(sponserBlackDiv);
  /* close form */
  sponserBlackDiv.addEventListener("click", () => {
    const sponserDivRemove = document.getElementById("sponser_box_div");
    sponserDivRemove.remove();
    const sponserBlackDivRemove = document.getElementById("sponser_black_div");
    sponserBlackDivRemove.remove();
    document.querySelector("header").style.display = "flex";
  });

  /* sponser box */
  this.sponserBoxDiv = document.createElement("div");
  this.sponserBoxDiv.className = "sponser_box_div";
  this.sponserBoxDiv.id = "sponser_box_div";
  document.querySelector("body").appendChild(this.sponserBoxDiv);
  /* close btn */
  this.close = document.createElement("div");
  this.close.innerHTML = "X";
  this.close.className = "close_sponser_box";
  this.close.id = "close_sponser_box";
  this.close.onclick = () => {
    const sponserDivRemove = document.getElementById("sponser_box_div");
    sponserDivRemove.remove();
    const sponserBlackDivRemove = document.getElementById("sponser_black_div");
    sponserBlackDivRemove.remove();
    document.querySelector("header").style.display = "flex";
  };
  this.sponserBoxDiv.appendChild(this.close);
  /* sponser - box */
  this.sponserBox = document.createElement("div");
  this.sponserBox.className = "sponser_box";
  this.sponserBox.id = "sponser_box";
  this.sponserBoxDiv.appendChild(this.sponserBox);
  /* sponser - a */
  this.titleA = document.createElement("a");
  this.titleA.href = this.link;
  this.titleA.className = "a";
  this.titleA.target = "_blank";
  this.sponserBox.appendChild(this.titleA);
  /* sponser - title */

  this.titleBox = document.createElement("h1");
  this.titleBox.innerHTML = this.name;
  this.titleBox.className = "sponser_title";
  this.titleA.appendChild(this.titleBox);
  /* sponser - content */
  this.contentBox = document.createElement("div");
  this.contentBox.innerHTML = this.content;
  this.contentBox.className = "sponser_content";
  this.titleA.appendChild(this.contentBox);
  /* sponser - back / next/ logo */
  this.logoBox = document.createElement("div");
  this.logoBox.className = "nextBsck_logo_box";
  this.sponserBox.appendChild(this.logoBox);
  /* sponser - back */
  this.back = document.createElement("div");
  this.back.innerHTML = "<";
  this.back.className = "back";
  this.back.id = "back_" + this.name;
  this.back.addEventListener("click", backSp);
  this.logoBox.appendChild(this.back);
  /* sponser - a */
  this.logoA = document.createElement("a");
  this.logoA.href = this.link;
  this.logoA.target = "_blank";
  this.logoA.className = "a";

  this.logoBox.appendChild(this.logoA);
  /* sponser - logo */
  this.sponsLogo = document.createElement("img");
  this.sponsLogo.src = this.logo;
  this.sponsLogo.className = "sponser_logo";
  this.logoA.appendChild(this.sponsLogo);
  /* sponser - next */
  this.next = document.createElement("div");
  this.next.innerHTML = ">";
  this.next.className = "next";
  this.next.id = "next_" + this.name;
  this.next.addEventListener("click", nextSp);
  this.logoBox.appendChild(this.next);
  /* sponser - imgs carousel */
  this.imgsBox = document.createElement("div");
  this.imgsBox.id = "sponserCarousel";
  this.imgsBox.className = "carousel slide sponser_carousel";
  this.imgsBox.setAttribute("data-ride", "carousel");
  this.imgsBox.dataRide = "carousel";
  this.sponserBox.appendChild(this.imgsBox);
  /* sponser - imgs carousel ol */
  this.imgsOl = document.createElement("ol");
  this.imgsOl.className = "carousel-indicators";
  this.imgsBox.appendChild(this.imgsOl);
  /* li-1 */
  this.imgsli1 = document.createElement("li");
  this.imgsli1.className = "active";
  this.imgsli1.setAttribute("data-target", "#sponserCarousel" + this.i);
  this.imgsli1.setAttribute("data-slide-to", "0");
  this.imgsli1.dataTarger = "#sponserCarousel";
  this.imgsli1.dataSlideTo = 0;
  this.imgsOl.appendChild(this.imgsli1);
  /* li-2 */
  this.imgsli2 = document.createElement("li");
  this.imgsli2.setAttribute("data-target", "#sponserCarousel" + this.i);
  this.imgsli2.setAttribute("data-slide-to", "1");
  this.imgsli2.dataTarger = "#sponserCarousel";
  this.imgsli2.dataSlideTo = 1;
  this.imgsOl.appendChild(this.imgsli2);
  /* li-3 */
  this.imgsli3 = document.createElement("li");
  this.imgsli3.setAttribute("data-target", "#sponserCarousel" + this.i);
  this.imgsli3.setAttribute("data-slide-to", "2");
  this.imgsli3.dataTarger = "#sponserCarousel";
  this.imgsli3.dataSlideTo = 2;
  this.imgsOl.appendChild(this.imgsli3);
  /* carousale imgs */
  this.carouselInner = document.createElement("div");
  this.carouselInner.className = "carousel-inner";
  this.imgsBox.appendChild(this.carouselInner);
  /* img 1 */
  this.carouselItem = document.createElement("div");
  this.carouselItem.className = "carousel-item active";
  this.carouselInner.appendChild(this.carouselItem);
  this.carouselImg = document.createElement("img");
  this.carouselImg.className = "d-block w-100";
  this.carouselImg.alt = this.name + " image";
  this.carouselImg.src = this.imgs[0];
  this.carouselItem.appendChild(this.carouselImg);
  /* img 2 */
  this.carouselItem2 = document.createElement("div");
  this.carouselItem2.className = "carousel-item";
  this.carouselInner.appendChild(this.carouselItem2);
  this.carouselImg2 = document.createElement("img");
  this.carouselImg2.className = "d-block w-100";
  this.carouselImg2.alt = this.name + " image";
  this.carouselImg2.src = this.imgs[1];
  this.carouselItem2.appendChild(this.carouselImg2);
  /* img 3 */
  this.carouselItem3 = document.createElement("div");
  this.carouselItem3.className = "carousel-item";
  this.carouselInner.appendChild(this.carouselItem3);
  this.carouselImg3 = document.createElement("img");
  this.carouselImg3.className = "d-block w-100";
  this.carouselImg3.alt = this.name + " image";
  this.carouselImg3.src = this.imgs[2];
  this.carouselItem3.appendChild(this.carouselImg3);
  /* previous icon */
  this.prevA = document.createElement("a");
  this.prevA.className = "carousel-control-prev";
  this.prevA.href = "#sponserCarousel";
  this.prevA.setAttribute("role", "button");
  this.prevA.setAttribute("data-slide", "prev");
  this.prevA.role = "button";
  this.prevA.dataSlide = "prev";
  this.imgsBox.appendChild(this.prevA);
  /* previous div */
  this.prevSpan = document.createElement("span");
  this.prevSpan.className = "carousel-control-prev-icon";
  this.prevSpan.setAttribute("aria-hidden", "true");
  this.prevSpan.ariaHidden = "true";
  this.prevA.appendChild(this.prevSpan);
  this.prevSpan2 = document.createElement("span");
  this.prevSpan2.className = "sr-only";
  this.prevSpan2.innerHTML = "Previous";
  this.prevA.appendChild(this.prevSpan2);
  /* next icon */
  this.nextA = document.createElement("a");
  this.nextA.className = "carousel-control-next";
  this.nextA.href = "#sponserCarousel";
  this.nextA.setAttribute("role", "button");
  this.nextA.setAttribute("data-slide", "next");
  this.nextA.role = "button";
  this.nextA.dataSlide = "next";
  this.imgsBox.appendChild(this.nextA);
  /* next div */
  this.nextSpan = document.createElement("span");
  this.nextSpan.className = "carousel-control-next-icon";
  this.nextSpan.setAttribute("aria-hidden", "true");
  this.nextSpan.ariaHidden = "true";
  this.nextA.appendChild(this.nextSpan);
  this.nextSpan2 = document.createElement("span");
  this.nextSpan2.className = "sr-only";
  this.nextSpan2.innerHTML = "Next";
  this.nextA.appendChild(this.nextSpan2);
  // counter++;
};
/* next sponser func */
function nextSp() {
  const thisName = this.id.slice(5);
  for (let sp = 0; sp < sponsersArr.length; sp++) {
    if (thisName == sponsersArr[sp].name) {
      let spNext;
      sp < sponsersArr.length - 1 ? (spNext = sp + 1) : (spNext = 0);
      const sponserBoxRemove = document.getElementById("sponser_box_div");
      sponserBoxRemove.remove();
      sponsersArr[spNext].renderSponserBox();
      const sponserBlackDivRemove = document.getElementById(
        "sponser_black_div"
      );
      sponserBlackDivRemove.remove();
      return;
    }
  }
}
/* back sponser func */
function backSp() {
  const thisName = this.id.slice(5);
  for (let sp = 0; sp < sponsersArr.length; sp++) {
    if (thisName == sponsersArr[sp].name) {
      let spBack;
      sp === 0 ? (spBack = sponsersArr.length - 1) : (spBack = sp - 1);
      const sponserBoxRemove = document.getElementById("sponser_box_div");
      sponserBoxRemove.remove();
      sponsersArr[spBack].renderSponserBox();
      const sponserBlackDivRemove = document.getElementById(
        "sponser_black_div"
      );
      sponserBlackDivRemove.remove();
      return;
    }
  }
}
