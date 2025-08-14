import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    collectible:{
        type:String,
        require:true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export { User };
