document.getElementById("home").addEventListener("mouseover", mouseOver);
document.getElementById("home").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("home").style.color = "#3bbca7";
    document.getElementById("profile").style.color = "#666666";

}

function mouseOut() {
    document.getElementById("home").style.color = "#666666";
    document.getElementById("profile").style.color = "#3bbca7";

}


// password============================================================================================================================


const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const togglePassword3 = document.querySelector("#togglePassword3");

const password = document.querySelector("#password");
const password2 = document.querySelector("#password-2");
const password3 = document.querySelector("#password-3");


togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye");
});

togglePassword2.addEventListener("click", function () {
    // toggle the type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye");
});

togglePassword3.addEventListener("click", function () {
    // toggle the type attribute
    const type = password3.getAttribute("type") === "password" ? "text" : "password";
    password3.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye");
});
// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

// ===============================================


function myFunction() {

    document.getElementById("username").style.color = "gray";
    document.getElementById("password").style.color = "gray";
    document.getElementById("email-2").style.color = "gray";
    document.getElementById("r-user").style.color = "gray";
    document.getElementById("password-2").style.color = "gray";
    document.getElementById("password-3").style.color = "gray";
  }
