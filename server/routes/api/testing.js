const express = require('express');
const router = express.Router();
const jobs = require('../../Models/jobsModel');

/**
 * @route GET api/testing/
 * @desc Retrives all the jobs match with the userId (For Client)
 **/
router.get('/:currentJobId', async (req, res) => {
  const jobId = parseInt(req.params.currentJobId);
  console.log("hi");
  const targetJobs = await jobs.find({_id: jobId});
  console.log("test" + targetJobs[0]);
  return res.json(targetJobs[0]);
});
module.exports = router;