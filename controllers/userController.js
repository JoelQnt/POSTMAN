import mongoose from "mongoose";
import { User } from "../models/User.js";

export const allUsers = async (req, res) => {
  try {
     await User.find();
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};

export const newUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json("user successfully created");
  } catch (error) {
    throw new Error(error);
  }
};
export const editUserById = async (req, res) => {
  try {
    User.findByIdAndUpdate();
  } catch (error) {
    throw new Error(error);
  }
};
export const removeUserById = async (req, res) => {
  try {
    User.findByIdAndDelete(req.param.id);
  } catch (error) {
    throw new Error(error);
  }
};
