const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("Submitted");

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue, 2)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length > 1) {
    return true;
  }
  return false;
}
