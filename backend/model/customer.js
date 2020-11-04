const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {type: String, require: true, trim: true},
    surname: {type: String, require: true, trime: true},
    email: {type: String, require: true, trime: true},
    dietary: {type: String, require: true, trime: true}
})
module.exports = mongoose.model("Customer", customerSchema);