let textInput = document.getElementById("textInput");
let displayText = document.getElementById("displayText");

textInput.addEventListener("input", function () {
  displayText.textContent = textInput.value;
});
