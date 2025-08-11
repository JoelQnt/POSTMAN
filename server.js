import express from "express";
import mongoose from "mongoose";
import { connectDatabase } from "./connectDatabase.js";

const app = express();

app.listen(9191, async () => {
  try {
    await connectDatabase();
    console.log("server running on port 9191");
  } catch (error) {

  }
});
