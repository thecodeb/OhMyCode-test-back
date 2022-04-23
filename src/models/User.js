// Requires

const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Register´s schema
 */

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: { type: String, required: true }
    }
});

UserSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

// Export

module.exports = mongoose.model("User", UserSchema);