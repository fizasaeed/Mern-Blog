import mongoose from "mongoose";

//this is basically the user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      //the password is not unique because two users can have the same password
    },
  },
  { timestamp: true }
);

//this is basically the model

const User = mongoose.model("User", userSchema);
export default User;
