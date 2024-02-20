import mongoose from "mongoose";

const payloadSchema = new mongoose.Schema({
    type: String, //["text", "code", "image", "audio", "video"]
    content: String
})

const messageSchema = new mongoose.Schema({
    isGroupMessage: Boolean, // default false
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, // userId / groupId
    payload: payloadSchema
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema)

export default Message