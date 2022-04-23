// Requires

const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Register´s schema
 */

const RegisterSchema = new Schema({
    user: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true }
});

RegisterSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

// Export

module.exports = mongoose.model("Register", RegisterSchema);