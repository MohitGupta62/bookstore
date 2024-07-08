import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import bookRoute from "./route/book_route.js";
import userRoute from "./route/user_route.js";
const app = express();

//ye isliye use karte hai kyuki Frontend and backend ka server alag - alag hota hai to database se data frontend me nhi ja pata hai
app.use(cors());

//data ko database me bhjta h json ke form me isko parse karna padta hai
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;

const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Connect to MongoDB");
} catch (error) {
  console.log(error);
}

//defining routes

app.use("/book", bookRoute);

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("skflk!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
