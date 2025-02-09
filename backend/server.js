require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user-routes");
const postRoutes = require("./routes/post-routes");
const followRoutes = require("./routes/follow-routes");
const threadRoutes = require("./routes/thread-routes");

mongoose
  .connect(
    "mongodb+srv://shrey:shreyas35Q@cluster0.x2bmwv2.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/thread", threadRoutes);

app.listen(PORT, () => console.log(`${PORT}`));
