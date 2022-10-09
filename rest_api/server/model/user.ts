
import { IUser } from "../types/auth";
import {model, Schema} from "mongoose"

const UserSchema:Schema = new Schema({
    name: {
        type: String,
        required:true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
      },
}, { timestamps:true }
)

export default model<IUser>("User", UserSchema)