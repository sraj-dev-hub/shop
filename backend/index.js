const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
var path = require("path");

app.use(
  "/static",
  express.static(path.join(__dirname, "../Frontend/build/static"))
);
app.use(
  "/images",
  express.static(path.join(__dirname, "../Frontend/build/images"))
);
app.get("/", (req, res) => {
  console.log(path.resolve(__dirname + "../Frontend/build/index.html"));
  res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
  //   res.send("This is from express.js");
});

app.listen(PORT, () => {
  console.log("server started on port 3002");
});
