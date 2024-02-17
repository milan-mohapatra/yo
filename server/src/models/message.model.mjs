import mongoose from "mongoose";

const payloadSchema = new mongoose.Schema({
    type: String, //["text", "code", "image", "audio", "video"]
    content: String
})

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    payload: payloadSchema
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema)

export default Message