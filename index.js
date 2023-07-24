const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const form = document.querySelector("form");
const input = document.querySelector("input");
const label = document.querySelector("label");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value;

  if (inputValue === "") {
    error.style.display = "block";
    label.style.display = "block";
  } else if (!isEmail(inputValue)) {
    error.style.display = "block";
    label.style.display = "block";
  } else {
    error.style.display = "none";
    label.style.display = "none";
  }
}

function isEmail(input) {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    input
  );
}
