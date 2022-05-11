const express = require("express");
const routes = require("./router");
const app = express();

const port = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
