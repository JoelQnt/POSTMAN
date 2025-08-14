import express from "express";
import mongoose from "mongoose";
import { connectDatabase } from "./connectDatabase.js";

import {
  allUsers,
  editUserById,
  newUser,
  removeUserById,
} from "./controllers/userController.js";

const app = express();
app.use(express.json())

app.get("/api/v1/users", allUsers);
app.post("/api/v1/user/create", newUser);
app.put("/api/v1/user/update/:id", editUserById);
app.delete("/api/v1/user/delete/:id", removeUserById);

app.listen(9191, async () => {
  try {
    console.log("server running on port 9191");
    await connectDatabase();
    
  } catch (error) {
    throw new Error (error)
  }
});
 