import mongoose from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new mongoose.Schema<TMessage>(
  {
    senderName: {
      type: String,
      minLength: [2, "Name Must Contain At Least 2 Characters!"],
    },
    subject: {
      type: String,
      minLength: [2, "Subject Must Contain At Least 2 Characters!"],
    },
    message: {
      type: String,
      minLength: [2, "Message Must Contain At Least 2 Characters!"],
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model<TMessage>("Message", messageSchema);
