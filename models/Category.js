const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let categorySchema = new Schema ({
    name: String,
    instructions: Array,
    ingredients: Array
});

module.exports = mongoose.model("Category", categorySchema)