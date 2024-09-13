let form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.querySelector("input[name=username]").value;
  console.log(`"Имя: ${name}"`);
});
