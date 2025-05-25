import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemroute from "./routes/itemroute.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

const app = express();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(itemroute);

// Port setup
const PORT = parseInt(process.env.PORT) || 8800;

// Function to start server
const startServer = (port) => {
  const server = app
    .listen(port, () => {
      console.log(`Server up and running on port ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${port} is already in use.`);
        const newPort = port + 1;
        console.log(`Attempting to use port ${newPort} instead...`);
        startServer(newPort);
      } else {
        console.error("Server error:", err);
      }
    });
};

// Start the server
startServer(PORT);
