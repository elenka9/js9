document.cookie = "username=JohnDoe"; /*установили куки*/

let setCookie = document.getElementById("setCookie");

setCookie.addEventListener("click", function () {
  setCookie.innerHTML = "<p>куки успешно установлены</p>";
});
