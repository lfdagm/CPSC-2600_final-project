const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: Number, required:true},
  firstName: {type: String, required: true, maxLength:70},
  lastName: {type: String, required: true, maxLength:70},
  role: {type: String,
    required: true,
    enum: ["client", "jobSeeker"]},
  email: {type: String, required: true, maxLength:70},
  password: {type: String, require: true, maxLength: 70},
  areaOfInterest: [{type: String, require:false, maxLength:20}]
});

module.exports = mongoose.model('user', userSchema);