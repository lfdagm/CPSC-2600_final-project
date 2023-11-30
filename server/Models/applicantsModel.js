const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantsSchema = new Schema({
  jobId: {
    type: Number,
    require:true,
  },
  userId:{
    type: Number,
    require: true,
  },
  price:{
    type: Number,
    min: [0, "The price you request cannot be lower than 0."],
    require: true,
  }
});

module.exports = mongoose.model('applicants', applicantsSchema);