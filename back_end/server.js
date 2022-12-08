const express = require("express");
const moggoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const instPostRouter = require("./routes/instaPost");

app.use(cors());
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use("/post", instPostRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});
moggoose
  .connect(process.env.MONGODB_URL)
  .then((res) => console.log("Database connected"))
  .catch((e) => console.log(e));

app.listen(process.env.PORT || 3000, () =>
  console.log(`server Started http://localhost:${process.env.PORT}`),
);
