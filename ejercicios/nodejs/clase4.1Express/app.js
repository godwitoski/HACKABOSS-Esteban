const express = require("express");
const morgan = require("morgan");
const path = require("path");
const json = require("./database/data.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// app.get("/user", (req, res) => {
//   //   const ip = req.ip;
//   //   console.log(ip);
//   res.send("User sin parametro");
// });

app.get("/user", (req, res) => {
  //res.send(req.query);
  const { name } = req.query; //querystring

  if (name) {
    const user = json.filter((e) => e.name.includes(name));
    if (user.length)
      return res.status(200).send({
        status: "OK",
        data: user,
      });
    res.status(400).send("not found");
  } else {
    res.status(200).send({
      status: "OK",
      data: json,
    });
  }
});

app.get("/user/:id", (req, res) => {
  //res.send(req.params);
  const { id } = req.params; //params
  const user = json.find((e) => e.id === parseInt(id));

  if (!user) return res.status(400).send("Not found");

  res.status(200).send({
    status: "OK",
    data: user,
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
