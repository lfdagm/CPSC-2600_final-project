const express = require('express');
const router = express.Router();
const jobs = require('../../Models/jobsModel');
const applicants = require('../../Models/applicantsModel');
let currentJobId = 8;

/**
 * @route GET api/jobs/
 * @desc Retrives all the jobs match with the userId (For Client)
 **/
router.get('/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  console.log(userId);
  const targetJobs = await jobs.find({clientId: userId});
  console.log(targetJobs);
  return res.json(targetJobs);
});
/**
 * @route POST api/jobs/
 * @desc Creates a new job post (For Client)
 **/
router.post('/', async (req,res) => {
  /**
     * @desc get the potential jobs (For Job Seeker)
    **/
  if(req.body.action == "related jobs") {
    const userId = parseInt(req.body.userId);
    const aOI = req.body.areaOfInterest;
    const appliedJobs = await applicants.find({userId: userId});
    let result = [];
    const allJobs = await jobs.find({});
    for (i = 0; i < allJobs.length; i++) {
      for (j = 0; j < aOI.length; j++) {
        let applied = false;
        if (allJobs[i].category === aOI[j]) {
          for (k = 0; k < appliedJobs.length; k++) {
            if (allJobs[i]._id === appliedJobs[k].jobId) {
              applied = true;
              break;
            }
          }
          if (!applied) {
          result.push(allJobs[i]);
          break;
        }
        }
      }
    }
    return res.json(result);
  } else if (req.body.action == "Jobseeker jobs") {
    /**
     * @desc Get the applied jobs (For Job Seeker)
    **/
    const userId = parseInt(req.body.userId);
    const appliedJobs = await applicants.find({userId: userId});
    let result = [];
    const allJobs = await jobs.find({});
    for (i = 0; i < allJobs.length; i++) {
      let applied = false;
      for (j = 0; j < appliedJobs.length; j++) {
        if (allJobs[i]._id === appliedJobs[j].jobId) {
          applied = true;
          break;
        }
      }
      if (applied) {
        result.push(allJobs[i]);
      }
    }
    console.log(result);
    return res.json(result);
  } else {
    /**
      * @desc Creates a new job post (For Client)
    **/
    if (req.body.jobTitle === "" || req.body.jobDescription === "") {
      return res.status(400).json({msg: "Bad request: task name cannot be empty of null"});
    }
    const newJobPost = {
      id: currentJobId,
      clientId: req.body.userId,
      category: req.body.category,
      jobTitle: req.body.jobTitle,
      jobDescription: req.body.jobDescription,
      jobDate: req.body.jobDate,
      postCreated: req.body.postCreated,
      applicants:[],
      status:"searching"
    };
    jobs.push(newJobPost);
    // increment id for unique jobIds
    currentJobId++;
    return res.json(jobs);
  }
});

/**
 * @route PUT api/jobs/
 * @desc modifying data with update requests
 */
router.put('/', async (req,res) => {
  /**
  * @desc updating the jobs applicants property with the JobseekerId and the price
  */
  if (req.body.action == "applyingJob") {
    let userId = parseInt(req.body.clientId);
    let jobId = parseInt(req.body.jobId);
    let requirePrice = parseInt(req.body.price);
    let jobList = jobs.map((job) => {
      if (job.jobId == jobId) {
        let applicants = job.applicants;
        applicants.push({id: userId, price: requirePrice});
        job.applicants = applicants;
      };
      return job;
    });
    return res.json({result: "Success", temp: jobs})
  } else if (req.body.action == "choosing applicant") {
    /**
    * @desc updating the jobProvider property with the JobseekerId (For Client)
    */
    let userId = req.body.jobSeekerId;
    let jobId = req.body.jobId;
    jobs.map((job) => {
      if (job.jobId == jobId) {
        job.jobProvider = userId;
        job.status="confirmed";
      };
      return job;
    });
    return res.json({result: "Success", temp: jobs})
  } else if (req.body.action == "completeJob") {
    /**
  * @desc updating the status property to completed (For Client)
  */
    let jobId = parseInt(req.body.jobId);
    const job = await jobs.find({_id:jobId});
    job[0].status = "completed";
    console.log(job);
    const result = await jobs.findOneAndUpdate({_id:jobId},job[0]);
    return res.json({result: "Success", temp:result})
  }
});

module.exports = router;