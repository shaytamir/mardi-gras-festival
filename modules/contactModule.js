import "./sponsers/sponsersMain.js";
const emailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
const phoneValid = /^[0-9 \+]*$/;
/* submit form function */
contact_submit.addEventListener("click", valid);

function valid(e) {
  e.preventDefault();

  let uname, uphone, uemail, utext;
  uname = document.querySelector("#name_input").value;
  uemail = document.querySelector("#input_email").value;
  uphone = document.querySelector("#phone_input").value;
  utext = document.querySelector("#text_area").value;

  document.getElementById("name_input").style.borderColor = "transparent";
  document.getElementById("input_email").style.borderColor = "transparent";
  document.getElementById("phone_input").style.borderColor = "transparent";
  document.getElementById("text_area").style.borderColor = "transparent";
  /* form validation */
  if (uname === "") {
    document.getElementById("name_input").style.borderColor = "red";
    document.querySelector("form>h5").innerHTML = "Please Enter Your Name";
    document.querySelector("form>h5").style.color = "red";
  } else if (uphone === "" || !phoneValid.test(uphone)) {
    document.getElementById("phone_input").style.borderColor = "red";
    document.querySelector("form>h5").innerHTML =
      "Please Enter a valid P hone Number";
    document.querySelector("form>h5").style.color = "red";
  } else if (uemail === "" || !emailValid.test(uemail)) {
    document.getElementById("input_email").style.borderColor = "red";
    document.querySelector("form>h5").innerHTML =
      "Please Enter a valid Email Address";
    document.querySelector("form>h5").style.color = "red";
  } else if (utext === "") {
    document.getElementById("text_area").style.borderColor = "red";
    document.querySelector("form>h5").innerHTML = "Please Enter Your Issue";
    document.querySelector("form>h5").style.color = "red";
  } else {
    popupwrper.style.display = "block";
    popupwrper.addEventListener("click", popup);

    document.getElementById("pop_h2").innerHTML = `Hallo ${uname}`;
    document.getElementById(
      "pop_p"
    ).innerHTML = `Your issue has been recived.</br>
  we will contact back in the next following days
  to </br><strong> ${uemail}</strong>
    `;
  }

  e.preventDefault();
}
function popup() {
  popupwrper.style.display = "none";
  resetForm();
}
function resetForm() {
  document.getElementById("contact_form").reset();
  document.querySelector("form>h5").innerHTML = "Contact Us";
  document.querySelector("form>h5").style.color = "black";
}
document.getElementById("form_reset").addEventListener("click", resetForm);
