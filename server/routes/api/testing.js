const express = require('express');
const router = express.Router();
const applicants = require('../../Models/applicantsModel');

/**
 * @route GET api/testing/
 * @desc [Client] Retrives all the jobs match with a particular job. So the front-end can display the latest applicants list for the client to choose.
 **/
router.get('/:currentJobId', async (req, res) => {
  const jobId = parseInt(req.params.currentJobId);
  console.log("hi");
  const appliedApplicants = await applicants.find({jobId: jobId});
  console.log("test" + appliedApplicants);
  return res.json(appliedApplicants);
});
module.exports = router;