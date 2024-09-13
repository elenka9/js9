let form =
  document.querySelector("#myForm"); /*вытаскиваем из HTML форму с атрибутами*/

form.addEventListener("submit", function (event) {
  /*навестим на форму addListener чтобы определить при каком событии будет происходить действие которое определено в  функции */ event.preventDefault(); /*предотвращаем отправку формы по умолчанию. Куда?  */
  let formData = new FormData(
    form
  ); /*создаем объект FormData чтобы собрать данные из form */
  formData.forEach((el, key) => {
    console.log(`${key}: ${el}`);
  });
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST" /*отправка наших данных из формы на сервер */,
    body: formData,
  })
    .then((response) => response.json()) /*Ответ от нашего сервиса */
    .then((data) =>
      console.log(data)
    ) /*используем наши данные и выводим их в консоль */
    .catch((error) => console.error("Ошибка", error)); /*ловим ошибку */
});

//? как понять что данные отправились на сервер
