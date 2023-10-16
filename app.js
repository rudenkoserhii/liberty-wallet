const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./helpers");
// const {
//   routerNotices,
//   routerFriends,
//   routerNews,
//   pets,
//   routerAuth,
//   routerUser,
//   routerDevelopers,
// } = require("./routes/api");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());

app.use("/api/auth", routerAuth);

app.use("/api/notices", routerNotices);
app.use("/api/user", routerUser);
app.use("/api/friends", routerFriends);
app.use("/api/news", routerNews);
app.use("/api/pets", pets);
app.use("/api/breeds", routerBreeds);
app.use("/api/developers", routerDevelopers);

// app.use('/api/location', ctrl.location);

app.use((req, res) => {
  console.log("!!!!! APP (req, res) !!!!!!");
  res.status(404); // .json({ message: "Not found", data: null });
  res.json({ messages: "ERRR JSONS" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;
