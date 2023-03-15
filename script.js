let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let loginBtn = document.getElementById("loginBtn");
let emailAcc = document.getElementById("emailAcc");
let passwordAcc = document.getElementById("passwordAcc");
let submitBtn = document.getElementById("submitBtn");

// dom sign up page

function createAccount() {
  localStorage.setItem("email", emailAcc.value);
  localStorage.setItem("password", passwordAcc.value);
  alert("anda berhasil membuat akun, silakan login dilogin page");
}

function onLogin() {
  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    alert("anda berhasil login");
  } else {
    alert("akun tidak ditemukan");
  }
}
