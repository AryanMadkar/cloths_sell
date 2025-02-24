import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
