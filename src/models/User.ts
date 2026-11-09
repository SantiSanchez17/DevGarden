import mongoose, { Schema } from "mongoose";
import { DTOUser } from "../interfaces/IUsers";


const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
})

const UserModel = mongoose.model<DTOUser>('user', userSchema);
export default UserModel;