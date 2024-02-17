import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, // custom: is available
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }, // min 3
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;