const express = require('express');
const router = express.Router();
const jobs = require('../../Models/jobsModel');
const applicants = require('../../Models/applicantsModel');
let currentJobId = 9;

/**
 * @route GET api/jobs/
 * @desc [Client] Retrives all the jobs that a client has created
 **/
router.get('/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    console.log(userId);
    const targetJobs = await jobs.find({clientId: userId});
    return res.json(targetJobs);
  } catch {
    return res.status(500).json({ result: "error", reason: "Internal server error" });
  }
});

/**
 * @route POST api/jobs/
 * @desc Handling post requests for:
 * - getting potential jobs for job seeker,
 * - getting the job a job seeker has applied
 * - creating a job post for clients
 **/
router.post('/', async (req,res) => {
  /**
     * @desc [Job Seeker] get the potential jobs
    **/
    try {
      if(req.body.action == "related jobs") {
      const userId = parseInt(req.body.userId);
      const aOI = req.body.areaOfInterest;
      const appliedJobs = await applicants.find({userId: userId});
      let result = [];
      const allJobs = await jobs.find({});
      for (i = 0; i < allJobs.length; i++) {
        if (allJobs[i].status === "searching") {
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
        }
        return res.json(result);
      } else if (req.body.action == "Jobseeker jobs") {
        /**
         * @desc [Job Seeker]Get the applied jobs
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
      } else if (req.body.action == "createJobPost") {
        /**
          * @desc [Client] Creates a new job post
        **/
        if (req.body.jobTitle === "" || req.body.jobDescription === "") {
          return res.status(400).json({msg: "Bad request: task name cannot be empty of null"});
        }
        const newJobPost = {
          _id: currentJobId,
          clientId: req.body.clientId,
          category: req.body.category,
          jobTitle: req.body.jobTitle,
          jobDescription: req.body.jobDescription,
          jobDate: req.body.jobDate,
          postCreated: req.body.postCreated,
          address: req.body.address,
          applicants:[],
          status:"searching"
        };
        const job = new jobs(newJobPost);
        job.save();
        // increment id for unique jobIds
        currentJobId++;
        return res.json({result:"Success", temp:newJobPost});
      }
    } catch {
      return res.status(500).json({ result: "error", reason: "Internal server error" });
    }
});

/**
 * @route PUT api/jobs/
 * @desc Handling put requests for applying jobs, selecting applicants, and marking job as completed
 */
router.put('/', async (req,res) => {
  /**
  * @desc updating the jobs applicants property with the JobseekerId and the price
  */
  try {
    if (req.body.action == "applyingJob") {
      console.log("hi");
      const userId = parseInt(req.body.clientId);
      const jobId = parseInt(req.body.jobId);
      const requirePrice = parseInt(req.body.price);
      const job = await jobs.find({_id:jobId});
      const applicantsOnJob = job[0].applicants;
      const addTojob = {
        id: userId,
        price: requirePrice
      }
      const addedApplicant = {
        jobId:jobId,
        userId: userId,
        price: requirePrice
      };
      applicantsOnJob.push(addTojob);
      await jobs.findOneAndUpdate({_id:jobId}, {applicants:applicantsOnJob});
      const job2 = await jobs.find({_id:jobId});
      console.log(job2);
      const test = new applicants(addedApplicant);
      test.save();
      return res.json({result: "Success", temp: jobId});
    } else if (req.body.action == "choosing applicant") {
      /**
      * @desc [Client] updating the jobProvider property with the JobseekerId
      */
      let userId = parseInt(req.body.jobSeekerId);
      console.log(userId);
      let jobId = parseInt(req.body.jobId);
      await jobs.findOneAndUpdate({_id:jobId}, {jobProvider: userId, status:"confirmed"});
      return res.json({result: "Success"})
    } else if (req.body.action == "completeJob") {
      /**
    * @desc [Client] updating the status property to completed
    */
      let jobId = parseInt(req.body.jobId);
      const job = await jobs.find({_id:jobId});
      job[0].status = "completed";
      console.log(job);
      const result = await jobs.findOneAndUpdate({_id:jobId},job[0]);
      return res.json({result: "Success", temp:result})
    }}
  catch {
    return res.status(500).json({ result: "error", reason: "Internal server error" });
  }
});

module.exports = router;