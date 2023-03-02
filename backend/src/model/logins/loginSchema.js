import mongoose from "mongoose";
const loginsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      maxLength: 20,
      required: true,
    },
    password: {
      type: String,
      maxLength: 20,
      required: true,
    },
  },
  { timeStamps: true }
);
export default mongoose.model("logins", loginsSchema);
