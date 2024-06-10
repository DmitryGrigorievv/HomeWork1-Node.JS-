// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз,
// когда загружается страница.
let FirstPageCount = 0;
let SecondPageCount = 0;
const { count } = require("console");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    FirstPageCount++;
    res.end(`<h1>Welcome</h1>'
      <a href="/about">переход на about страницу</a>
      <p>Количество просмотров страницы ${FirstPageCount}/<p>`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    SecondPageCount++;
    res.end(`<h1>About</h1>
      <a href="/">переход на главную страницу</a>
      <p>Количество просмотров страницы ${SecondPageCount}/<p>`);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Cтраница не найдена</h1>");
  }
});
server.listen(4000);
