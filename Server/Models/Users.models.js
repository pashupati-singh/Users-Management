import mongoose from "mongoose";


const UsersSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true }
},{
    keyVersion : false,
})

export const UsersModel = mongoose.model("UserManagements",UsersSchema);

