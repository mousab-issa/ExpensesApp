require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Database (Monogdb)
const connectToDb = require("./db");
connectToDb();

app.use(express.json());
// Routes
const AuthRoutes = require("./routes/auth");
app.use(AuthRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.send("Route does not exists ");
});

app.listen(process.env.PORT || 4000, async () => {
  try {
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
});
