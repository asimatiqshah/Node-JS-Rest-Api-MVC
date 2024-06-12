const mongoose  = require("mongoose");
//Schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }
    },{timestamps:true}
)
// Create a model
const UserModal = mongoose.model('employees', userSchema);

module.exports = UserModal;