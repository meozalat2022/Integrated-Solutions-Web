import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: [
    {
      name: { type: String, default: "" },
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      state: { type: String, default: "" },
    },
  ],
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
