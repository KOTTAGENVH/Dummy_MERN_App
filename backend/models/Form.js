const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },

  Age: {
    type: String,
    required: true,
  },


});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
