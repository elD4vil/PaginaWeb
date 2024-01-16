import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Asegúrate de usar técnicas de hash y salting
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
