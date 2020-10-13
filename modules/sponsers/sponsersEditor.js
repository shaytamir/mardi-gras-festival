import { sponsersArr, newSponser, renderSponsersList } from "./sponsers.js";
/* logo slider - starts/stop when obj changes */
import { startLogosSlider, stopInterval } from "./logos.js";
/* imgs list for add sponsers options */
import { demoImgsObg } from "../objects/demoImages.js";
/* Web Page validation */
const webRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

/*  removes the sponsers list  */
function removeAllSponsers() {
  console.log(sponsersArr);
  stopInterval();
  for (let sp = 0; sp < sponsersArr.length; sp++) {
    document.getElementById("spons" + sp).remove();
  }
}

/*  ReCreate the sponsers list  */
function reRender() {
  const editorDivRemove = document.getElementById("editor_div");
  editorDivRemove.remove();
  /* renders sponsers nav-list & sponsers popup-page */
  renderSponsersList();
  /* renders the editor sponsers list */
  renderSponsers();
  /* renders new sponser btn */
  createNewSponser();
  /* starts logo slider */
  startLogosSlider();
}
/* ------------ ------------ */
/* renders sponsers editor to navbar ul */
export function editorLi() {
  const editorLi = document.createElement("div");
  editorLi.id = "editor_li";
  editorLi.className = "dropdown-item";
  editorLi.innerHTML = "Sponsers Editor";
  document.getElementById("sponsers_div").appendChild(editorLi);
  /* hr */
  const hr = document.createElement("hr");
  hr.style.margin = "4px";
  document.getElementById("sponsers_div").appendChild(hr);
  /* click opens sponsers editor */
  editorLi.addEventListener("click", () => {
    document.getElementById("navbarSupportedContent").classList.remove("show");
    const blackDivEditor = document.createElement("div");
    blackDivEditor.id = "black_div_sponsers_editor";
    document.querySelector("body").appendChild(blackDivEditor);
    /* close editor */
    blackDivEditor.addEventListener("click", () => {
      const editorDivRemove = document.getElementById("editor_div");
      editorDivRemove.remove();
      const editorRemove = document.getElementById("black_div_sponsers_editor");
      editorRemove.remove();
      document.querySelector("header").style.display = "flex";
    });
    document.querySelector("header").style.display = "none";
    /* renders editor sponsers */
    renderSponsers();
    /* renders editor new sponser */
    createNewSponser();
  });
}

/* renders the editor sponsers list */
function renderSponsers() {
  const editorDiv = document.createElement("div");
  editorDiv.id = "editor_div";
  document.querySelector("body").appendChild(editorDiv);
  /* close btn */
  const closeEditor = document.createElement("div");
  closeEditor.innerHTML = "X";
  closeEditor.className = "close_editor";
  closeEditor.id = "close_editor";
  closeEditor.addEventListener("click", () => {
    if (document.getElementById("editor_div")) {
      const editorDivRemove = document.getElementById("editor_div");
      editorDivRemove.remove();
    }
    const sponserEditorRemove = document.getElementById(
      "black_div_sponsers_editor"
    );
    sponserEditorRemove.remove();
    document.querySelector("header").style.display = "flex";
  });
  editorDiv.appendChild(closeEditor);
  /* editor h2 */
  const editorH2 = document.createElement("h2");
  editorH2.innerHTML = "Sponsers Editor";
  editorDiv.appendChild(editorH2);
  /* editor ul */
  const editorul = document.createElement("div");
  editorul.id = "editor_ul";
  editorDiv.appendChild(editorul);
  /* renders li of sponsers to edit */
  for (let sp = 0; sp < sponsersArr.length; sp++) {
    const editorSp = document.createElement("div");
    editorSp.className = "sp_box";
    editorSp.id = "sp_box" + sp;
    editorul.appendChild(editorSp);
    const editorLi = document.createElement("div");
    editorLi.className = "sponser_li";
    /* on li click - opens edit changes */
    editorLi.addEventListener("click", () => {
      /* opens change sponser - edit */
      changeSponser(sp);
    });
    editorSp.appendChild(editorLi);
    /* sponser name in list */
    const sponserName = document.createElement("div");
    sponserName.className = "sponser_name";
    sponserName.id = "sponser_name" + sp;
    sponserName.innerHTML = sponsersArr[sp].name;
    editorLi.appendChild(sponserName);
    /* edit img */
    const editoredit = document.createElement("img");
    editoredit.className = "sponser_edit";
    editoredit.src = "img/img/icons/edit.png";
    editoredit.alt = "edit image";
    editorLi.appendChild(editoredit);
    /* delete a sponser from list*/
    const spClose = document.createElement("div");
    spClose.className = "sponser_close";
    spClose.innerHTML = "X";
    editorSp.appendChild(spClose);
    spClose.addEventListener("click", () => {
      /* only if sponsers > 5  = remove and render */
      if (sponsersArr.length > 5) {
        // document.getElementById("sp_box" + sp).remove();

        removeAllSponsers();
        sponsersArr.splice(sp, 1);
        reRender();
      } else {
      }
    });
  }
}

/* renders new sponser btn */
function createNewSponser() {
  const editorNewDiv = document.createElement("div");
  editorNewDiv.className = "new_li_div";
  document.getElementById("editor_ul").appendChild(editorNewDiv);
  /* li for new sponser  */
  const editorNew = document.createElement("div");
  editorNew.className = "new_sponser_li";
  editorNew.innerHTML = "Createe New Sponser";
  editorNewDiv.appendChild(editorNew);
  /* on add-new-sponser click */
  editorNew.addEventListener("click", createAddForm);
  /* transperent filler */
  const demo = document.createElement("div");
  demo.className = "sponser_close";
  demo.innerHTML = "X";
  editorNewDiv.appendChild(demo);
}
/* ------------------------------- */
/* **** Add new sponser to website **** */
function createAddForm() {
  /* black screen */
  const formBlackDiv = document.createElement("div");
  formBlackDiv.id = "form_black_div";
  formBlackDiv.style.display = "block";
  document.querySelector("body").appendChild(formBlackDiv);
  /* close form */
  formBlackDiv.addEventListener("click", () => {
    const sponserFormRemove = document.getElementById("sponser_form_div");
    sponserFormRemove.remove();
    const formBlackDivRemove = document.getElementById("form_black_div");
    formBlackDivRemove.remove();
  });
  /* create form */
  const sponserFormDiv = document.createElement("form");
  sponserFormDiv.id = "sponser_form_div";
  sponserFormDiv.autocomplete = "off";
  sponserFormDiv.className = "sponser_form_div";
  document.querySelector("body").appendChild(sponserFormDiv);
  /* close btn */
  const closeForm = document.createElement("div");
  closeForm.innerHTML = "X";
  closeForm.className = "close_form";
  closeForm.id = "close_form";
  closeForm.addEventListener("click", () => {
    const sponserFormRemove = document.getElementById("sponser_form_div");
    sponserFormRemove.remove();
    const formBlackDivRemove = document.getElementById("form_black_div");
    formBlackDivRemove.remove();
  });
  sponserFormDiv.appendChild(closeForm);
  /* h2 */
  const formH2 = document.createElement("h2");
  formH2.className = "form_h2";
  formH2.innerHTML = "Create New Sponser";
  sponserFormDiv.appendChild(formH2);
  /* sponser name div */
  const nameDiv = document.createElement("div");
  nameDiv.className = "input_div";
  sponserFormDiv.appendChild(nameDiv);
  /* sponser name label */
  const formNameLabel = document.createElement("label");
  formNameLabel.className = "form_lable";
  formNameLabel.innerHTML = "New Sponser Name";
  nameDiv.appendChild(formNameLabel);
  /* sponser name input */
  const formNameInput = document.createElement("input");
  formNameInput.type = "text";
  formNameInput.autofocus = true;
  formNameInput.placeholder = "Sponser Name...";
  formNameInput.className = "form_input";
  formNameInput.id = "name_input";
  nameDiv.appendChild(formNameInput);
  /* sponser info div */
  const infoDiv = document.createElement("div");
  infoDiv.className = "input_div";
  sponserFormDiv.appendChild(infoDiv);
  /* sponser info label */
  const formInfoLabel = document.createElement("label");
  formInfoLabel.className = "form_lable";
  formInfoLabel.innerHTML = "New Sponser information";
  infoDiv.appendChild(formInfoLabel);
  /* sponser name textarea */
  const formInfoTxtArea = document.createElement("textArea");
  formInfoTxtArea.placeholder = "Sponser information...";
  formInfoTxtArea.style.resize = "none";
  formInfoTxtArea.className = "form_textArea";
  formInfoTxtArea.setAttribute("maxlength", "380");
  formInfoTxtArea.id = "info_input";
  infoDiv.appendChild(formInfoTxtArea);
  /* horizontal row */
  const hrOne = document.createElement("hr");
  sponserFormDiv.appendChild(hrOne);
  /* sponser logo div */
  const logoDiv = document.createElement("div");
  logoDiv.className = "input_div newLogo_div";
  sponserFormDiv.appendChild(logoDiv);
  /* sponser logo label */
  const formlogoLabel = document.createElement("label");
  formlogoLabel.className = "form_lable";
  formlogoLabel.innerHTML = "New Sponser logo";
  logoDiv.appendChild(formlogoLabel);
  /* sponser logo select/options */
  const formlogoselect = document.createElement("select");
  formlogoselect.className = "form_select";
  formlogoselect.id = "form_logo_select";
  formlogoselect.innerHTML = "New Sponser logo";
  logoDiv.appendChild(formlogoselect);
  /* default option */
  const option0 = document.createElement("option");
  option0.className = "";
  option0.selected = "selected";
  option0.disabled = true;
  option0.innerHTML = "Choose - Logo";
  option0.value = "img/img/sponsers/demo/demo_logo1.png";
  formlogoselect.appendChild(option0);
  /* 3 logo options */
  for (let n = 1; n < 4; n++) {
    const option = document.createElement("option");
    option.className = "";
    option.innerHTML = "demo logo " + n;
    option.value = "img/img/sponsers/demo/demo_logo" + n + ".png";
    formlogoselect.appendChild(option);
  }
  /* import url logo */
  const logoUrlSpan = document.createElement("span");
  logoUrlSpan.className = "or_span";
  logoUrlSpan.innerHTML = "Or";
  logoDiv.appendChild(logoUrlSpan);
  const logoUrl = document.createElement("input");
  logoUrl.id = "url_input";
  logoUrl.className = "url_input";
  logoUrl.type = "text";
  logoUrl.placeholder = "Url... ";
  logoDiv.appendChild(logoUrl);
  /* url popup info / func */
  logoUrl.setAttribute("data-toggle", "popover");
  logoUrl.setAttribute("tytle", "Import Logo");
  logoUrl.setAttribute(
    "data-content",
    "Preferd png file , size ratio 16:9 , 16:8"
  );
  logoUrl.setAttribute("data-placement", "top");
  logoUrl.setAttribute("data-trigger", "focus");
  $(function () {
    $(".url_input").popover({
      container: "body",
    });
  });
  /* horizontal row */
  const hrTwo = document.createElement("hr");
  sponserFormDiv.appendChild(hrTwo);

  /*sponser imgs select  */
  for (let n = 1; n < 4; n++) {
    /* sponser img div */
    const imgDiv = document.createElement("div");
    imgDiv.className = "input_div newLogo_div";
    sponserFormDiv.appendChild(imgDiv);
    /* sponser img label */
    const formimgLabel = document.createElement("label");
    formimgLabel.className = "form_lable";
    formimgLabel.innerHTML = "New Sponser img" + n;
    imgDiv.appendChild(formimgLabel);
    /* sponser img select/options */
    const formImgselect = document.createElement("select");
    formImgselect.className = "form_select";
    formImgselect.id = "form_img" + n + "_select";
    formImgselect.innerHTML = "New Sponser img" + n;
    imgDiv.appendChild(formImgselect);
    /* img default option */
    const imgoption0 = document.createElement("option");
    imgoption0.className = "";
    imgoption0.selected = "selected";
    imgoption0.disabled = true;
    imgoption0.innerHTML = "Choose Image";
    imgoption0.value = "img/img/sponsers/demo/demo" + n + ".jpg";
    formImgselect.appendChild(imgoption0);
    /* list of imgs options */
    for (let i in demoImgsObg) {
      const imgoption = document.createElement("option");
      imgoption.innerHTML = i;
      imgoption.value = demoImgsObg[i];
      formImgselect.appendChild(imgoption);
    }
    /* import url img */
    const imgUrlSpan = document.createElement("span");
    imgUrlSpan.className = "or_span";
    imgUrlSpan.innerHTML = "Or";
    imgDiv.appendChild(imgUrlSpan);
    const imgUrl = document.createElement("input");
    imgUrl.id = "img" + n + "_input";
    imgUrl.className = "url_input";
    imgUrl.type = "text";
    imgUrl.placeholder = "Url...";
    imgUrl.setAttribute("data-toggle", "popover");
    imgUrl.setAttribute("tytle", "popover", "Import Logo");
    imgUrl.setAttribute(
      "data-content",
      "Preferd png file ,size ratio 16:9 , 16:8"
    );
    imgUrl.setAttribute("data-placement", "top");
    imgUrl.setAttribute("data-trigger", "focus");
    imgDiv.appendChild(imgUrl);
  }
  /* sponser link div */
  const linkDiv = document.createElement("div");
  linkDiv.className = "input_div";
  sponserFormDiv.appendChild(linkDiv);
  /* sponser link label */
  const linkLabel = document.createElement("label");
  linkLabel.className = "form_lable";
  linkLabel.innerHTML = "New Sponser Link";
  linkDiv.appendChild(linkLabel);
  /* sponser link input */
  const linkInput = document.createElement("input");
  linkInput.type = "text";
  linkInput.autofocus = true;
  linkInput.placeholder = "Sponser Website Link...";
  linkInput.className = "form_input";
  linkInput.id = "link_input";
  linkDiv.appendChild(linkInput);
  /* submit */
  const formSubmit = document.createElement("input");
  formSubmit.type = "submit";
  formSubmit.value = "Create";
  formSubmit.className = "form_submit";
  sponserFormDiv.appendChild(formSubmit);
  formSubmit.addEventListener("click", (e) => {
    // e.preventDefault();
    let urlLogoValue = document.getElementById("url_input").value;
    if (!urlLogoValue) {
      urlLogoValue = form_logo_select.value;
    }
    /* imgs from url */
    const urlImgsValue = [
      document.getElementById("img1_input").value,
      document.getElementById("img2_input").value,
      document.getElementById("img3_input").value,
    ];
    /* imgs from select - if no url */
    const selectImgsValue = [
      document.getElementById("form_img1_select").value,
      document.getElementById("form_img2_select").value,
      document.getElementById("form_img3_select").value,
    ];

    const imgsValue = [];
    /* if no url import takes img from selected option\or default */
    for (let img = 0; img < urlImgsValue.length; img++) {
      urlImgsValue[img]
        ? imgsValue.push(urlImgsValue[img])
        : imgsValue.push(selectImgsValue[img]);
    }
    /* if name/info/link empty: color border red/black */
    if (!name_input.value || !info_input.value) {
      !name_input.value
        ? (document.getElementById("name_input").style.border = "2px solid red")
        : (document.getElementById("name_input").style.border =
            "2px solid black");
      !info_input.value
        ? (document.getElementById("info_input").style.border = "2px solid red")
        : (document.getElementById("info_input").style.border =
            "2px solid black");
    } else {
      /* check if link is url/ and if empty */
      if (!linkInput.value || !linkInput.value.match(webRegex)) {
        linkInput.value = "https://www.walla.co.il/";
      }
      const sponserObj = {
        sname: name_input.value,
        scontent: info_input.value,
        slogo: urlLogoValue,
        simgs: imgsValue,
        slink: linkInput.value,
      };
      /* after form submit create and renders the new sponser */
      newSponserConstructor(sponserObj);
    }
    e.preventDefault();
  });
}

/* after form submit create and renders the new sponser */
function newSponserConstructor(sponser) {
  removeAllSponsers();
  newSponser(sponser);
  reRender();
  /* close form and black screen */
  const sponserFormRemove = document.getElementById("sponser_form_div");
  sponserFormRemove.remove();
  const formBlackDivRemove = document.getElementById("form_black_div");
  formBlackDivRemove.remove();
}
/*  ------------------------ */
/* function to edit a sponser */
function changeSponser(i) {
  const changeBlackDiv = document.createElement("div");
  changeBlackDiv.id = "changes_black_div";
  changeBlackDiv.style.display = "block";
  document.querySelector("body").appendChild(changeBlackDiv);
  /* close form */
  changeBlackDiv.addEventListener("click", () => {
    const sponserchangeRemove = document.getElementById("sponser_changes_form");
    sponserchangeRemove.remove();
    const changeBlackDivRemove = document.getElementById("changes_black_div");
    changeBlackDivRemove.remove();
  });

  /* create form */
  const sponserChangeDiv = document.createElement("form");
  sponserChangeDiv.id = "sponser_changes_form";
  sponserChangeDiv.autocomplete = "off";
  sponserChangeDiv.className = "sponser_changes_form";
  document.querySelector("body").appendChild(sponserChangeDiv);
  /* close btn */
  const closeChanges = document.createElement("div");
  closeChanges.innerHTML = "X";
  closeChanges.className = "close_changes";
  closeChanges.id = "close_changes";
  sponserChangeDiv.appendChild(closeChanges);
  closeChanges.addEventListener("click", () => {
    const sponserFormRemove = document.getElementById("sponser_changes_form");
    sponserFormRemove.remove();
    const formBlackDivRemove = document.getElementById("changes_black_div");
    formBlackDivRemove.remove();
  });

  /* h2 */
  const changesH2 = document.createElement("h2");
  changesH2.className = "changes_h2";
  changesH2.innerHTML = "edit Sponser";
  sponserChangeDiv.appendChild(changesH2);
  /* change name div */
  const changeName = document.createElement("div");
  changeName.className = "changes_input_div";
  sponserChangeDiv.appendChild(changeName);
  /* change name label */
  const changeNameLabel = document.createElement("label");
  changeNameLabel.className = "changes_lable";
  changeNameLabel.innerHTML = "Change Sponser Name";
  changeName.appendChild(changeNameLabel);
  /* change name input */
  const changeNameInput = document.createElement("input");
  changeNameInput.type = "text";
  changeNameInput.autofocus = true;
  changeNameInput.value = sponsersArr[i].name;
  changeNameInput.className = "changes_input";
  changeNameInput.id = "changeName_input";
  changeName.appendChild(changeNameInput);
  /* change info div */
  const changeInfoDiv = document.createElement("div");
  changeInfoDiv.className = "changes_input_div";
  sponserChangeDiv.appendChild(changeInfoDiv);
  /* change info label */
  const changeInfoLabel = document.createElement("label");
  changeInfoLabel.className = "changes_lable";
  changeInfoLabel.innerHTML = "Change Sponser information";
  changeInfoDiv.appendChild(changeInfoLabel);
  /* change name textarea */
  const changeInfoTxtArea = document.createElement("textArea");
  changeInfoTxtArea.placeholder = "Sponser information...";
  changeInfoTxtArea.style.resize = "none";
  changeInfoTxtArea.className = "change_textArea";
  changeInfoTxtArea.setAttribute("maxlength", "380");
  changeInfoTxtArea.id = "changeInfo_textArea";
  changeInfoTxtArea.value = sponsersArr[i].content;
  changeInfoDiv.appendChild(changeInfoTxtArea);
  /* change logo div */
  const changelogoDiv = document.createElement("div");
  changelogoDiv.className = "changes_input_div";
  sponserChangeDiv.appendChild(changelogoDiv);
  /* change logo label */
  const changeLogoLabel = document.createElement("label");
  changeLogoLabel.className = "changes_lable";
  changeLogoLabel.innerHTML = "Change Sponser Logo";
  changelogoDiv.appendChild(changeLogoLabel);
  /* change logo input */
  const changeLogoInput = document.createElement("input");
  changeLogoInput.className = "changes_input";
  changeLogoInput.type = "text";
  changeLogoInput.placeholder = "New Image Url...";
  changeLogoInput.value = sponsersArr[i].logo;
  changeLogoInput.id = "change_logo_input";
  /* img popup info */
  changeLogoInput.setAttribute("data-toggle", "popover");
  changeLogoInput.setAttribute("tytle", "popover", "Import Logo");
  changeLogoInput.setAttribute(
    "data-content",
    "Preferd png file ,size ratio 16:9 , 16:8"
  );
  changeLogoInput.setAttribute("data-placement", "top");
  changeLogoInput.setAttribute("data-trigger", "focus");
  changelogoDiv.appendChild(changeLogoInput);
  /* 3 imgs url's */
  for (let n = 1; n < 4; n++) {
    let m = n - 1;
    /* change img div */
    const changeImgDiv = document.createElement("div");
    changeImgDiv.className = "changes_input_div";
    sponserChangeDiv.appendChild(changeImgDiv);
    /* change img label */
    const changeImgLabel = document.createElement("label");
    changeImgLabel.className = "changes_lable";
    changeImgLabel.innerHTML = "Change Sponser Image" + n;
    changeImgDiv.appendChild(changeImgLabel);
    /* change img input */
    const changeImgInput = document.createElement("input");
    changeImgInput.id = "change_img" + n + "_input";
    changeImgInput.className = "changes_input";
    changeImgInput.type = "text";
    changeImgInput.placeholder = "New Image Url...";
    changeImgInput.value = sponsersArr[i].imgs[m];
    changeImgInput.setAttribute("data-toggle", "popover");
    changeImgInput.setAttribute("tytle", "popover", "Import Logo");
    changeImgInput.setAttribute(
      "data-content",
      "Preferd png file , size ratio 16:9 , 16:8"
    );
    changeImgInput.setAttribute("data-placement", "top");
    changeImgInput.setAttribute("data-trigger", "focus");
    changeImgDiv.appendChild(changeImgInput);
  }

  /* change sponser link div */
  const changeLinkDiv = document.createElement("div");
  changeLinkDiv.className = "changes_input_div";
  sponserChangeDiv.appendChild(changeLinkDiv);
  /* change sponser link label */
  const changeLinkLabel = document.createElement("label");
  changeLinkLabel.className = "changes_lable";
  changeLinkLabel.innerHTML = "Change Sponser Link";
  changeLinkDiv.appendChild(changeLinkLabel);
  /* change sponser link input */
  const changeLinkInput = document.createElement("input");
  changeLinkInput.type = "text";
  changeLinkInput.autofocus = true;
  changeLinkInput.placeholder = "Sponser Website Link...";
  changeLinkInput.value = sponsersArr[i].link;
  changeLinkInput.className = "changes_input";
  changeLinkInput.id = "change_link";
  changeLinkDiv.appendChild(changeLinkInput);

  /* submit */
  const changesSubmit = document.createElement("input");
  changesSubmit.type = "submit";
  changesSubmit.value = "Change";
  changesSubmit.className = "changes_submit";
  sponserChangeDiv.appendChild(changesSubmit);
  changesSubmit.addEventListener("click", (e) => {
    // e.preventDefault();
    let newName = document.getElementById("changeName_input").value,
      newContent = document.getElementById("changeInfo_textArea").value,
      newLogo = document.getElementById("change_logo_input").value,
      /* imgs input values */
      Imgs = [
        document.getElementById("change_img1_input").value,
        document.getElementById("change_img2_input").value,
        document.getElementById("change_img3_input").value,
      ],
      /* imgs new arr */
      newImgs = [];
    /* if inputs empty/deleted - takes values from original array */
    if (!newName) {
      newName = sponsersArr[i].name;
    }
    if (!newContent) {
      newContent = sponsersArr[i].content;
    }
    if (!newLogo) {
      newLogo = sponsersArr[i].logo;
    }
    for (let n = 0; n < 3; n++) {
      Imgs[n].length === 0
        ? newImgs.push(sponsersArr[i].imgs[n])
        : newImgs.push(Imgs[n]);
    }
    /* check validation for Web Address */
    let newLink = change_link.value;
    if (!newLink.match(webRegex) || !newLink) {
      newLink = sponsersArr[i].link;
    }
    /* new sponser object */
    const changeObj = {
      sname: newName,
      scontent: newContent,
      slogo: newLogo,
      simgs: newImgs,
      slink: newLink,
    };
    /* render sponser changes */
    changesSponserConstructor(changeObj, i);
    e.preventDefault();
  });
}
/* render sponser changes */
function changesSponserConstructor(sponser, i) {
  removeAllSponsers();
  newSponser(sponser);
  const popSponser = sponsersArr.pop();
  sponsersArr.splice(i, 1, popSponser);
  reRender();
  /* close form and black screen */
  const sponserFormRemove = document.getElementById("sponser_changes_form");
  sponserFormRemove.remove();
  const formBlackDivRemove = document.getElementById("changes_black_div");
  formBlackDivRemove.remove();
}
