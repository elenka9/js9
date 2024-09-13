localStorage.setItem("user", "John");
let saveLocal = document.getElementById("saveLocal");

saveLocal.addEventListener("click", function () {
  saveLocal.innerHTML = "<p>Данные успешно сохранены в Local</p>";
});

sessionStorage.setItem("sessionToken", "fghj");
let saveSession = document.getElementById("saveSession");

saveSession.addEventListener("click", function () {
  saveSession.innerHTML = "<p>Данные успешно сохранены в Session</p>";
});
