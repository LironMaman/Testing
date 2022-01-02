import express from "express";
import mongoose from "mongoose"; // MongoDB (database)
import cors from "cors"; // HTTP headers (enable requests)
// import morgan from 'morgan'; // Logs incoming requests
import dotenv from "dotenv"; // Secures variables


import usersRouter from "./api/routes/usersRouter.js";
import jobsRouter from "./api/routes/jobsRouter.js";

// initialize app
const app=express()
const origin = "*";

// middlewares
dotenv.config();
app.use(cors({ origin }));
app.use(express.json({ limit: "1mb", extended: false })); // body parser
app.use(express.urlencoded({ limit: "1mb", extended: false })); // url parser

// configure db:
const MONGO_URI = process.env.MONGO_URI;
const DEPRECATED_FIX = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connect to db
mongoose
  .connect(MONGO_URI, DEPRECATED_FIX)
  .catch((error) => console.log("❌ MongoDB connection error", error)); // listen for errors on initial connection

const db = mongoose.connection;
db.on("connected", () => console.log("✅ MongoDB connected")); // connected
db.on("disconnected", () => console.log("❌ MongoDB disconnected")); // disconnected
db.on("error", (error) => console.log("❌ MongoDB connection error", error)); // listen for errors during the session

// handling routing
app.use("/api/",usersRouter);
app.use("/api/",jobsRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{console.log("listenning port "+PORT+"...")});

