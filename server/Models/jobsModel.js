const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPostSchema = new Schema({
    _id: {type: Number, required:true},
    clientId: {type: Number, required:true},
    category: {type: String,
      required: true,
      enum: ["housing", "employment", "transportation", "education","socializing", "generalTasks"]
    },
    jobTitle: {type: String, required: true, maxLength:100},
    jobDescription: {type: String, required: true, maxLength: 300},
    jobDate: {type: Date, required: true},
    postCreated: {type: Date, default:Date.now()},
    applicants: [{
      id:{type: Number,
        require: true
      },
      price:{
        type: Number,
        min: [0, "The price you request cannot be lower than 0."],
        require: true
      }
    }],
    jobProvider: {
      type: Number,
      require: false
    },
    status: {
      type: String,
      enum:["searching", "confirmed", "completed"],
      default: "searching"
    },
});

module.exports = mongoose.model('jobs', jobPostSchema);