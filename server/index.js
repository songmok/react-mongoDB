const express = require("express");
const app = express();
const port = 5000;

// 서버가 요청을 받아들이기 위해서 대기 중.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 요청 : Request
// 응답 : Response
app.get("/", (요청, 응답) => {
  응답.send("Hello World!");
});
