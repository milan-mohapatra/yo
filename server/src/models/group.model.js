import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isDeleted: Boolean
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;