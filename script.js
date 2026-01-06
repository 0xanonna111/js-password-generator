const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lenVal = document.getElementById("lenVal");
const strengthEl = document.getElementById("strength");

lengthEl.oninput = () => {
  lenVal.innerText = lengthEl.value;
};

function generatePassword() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+";

  let chars = "";
  if (upperCheck()) chars += upper;
  if (lowerCheck()) chars += lower;
  if (numberCheck()) chars += number;
  if (symbolCheck()) chars += symbol;

  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = password;
  updateStrength(password.length);
}

function upperCheck() {
  return document.getElementById("upper").checked;
}
function lowerCheck() {
  return document.getElementById("lower").checked;
}
function numberCheck() {
  return document.getElementById("number").checked;
}
function symbolCheck() {
  return document.getElementById("symbol").checked;
}

function updateStrength(length) {
  if (length < 8) strengthEl.innerText = "Strength: Weak";
  else if (length < 14) strengthEl.innerText = "Strength: Medium";
  else strengthEl.innerText = "Strength: Strong";
}

function copyPassword() {
  navigator.clipboard.writeText(passwordEl.value);
  alert("Password copied!");
}
