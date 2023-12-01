const express = require('express');
const router = express.Router();
const applicants = require('../../Models/applicantsModel');

/**
 * @route GET api/testing/
 * @desc Retrives all the jobs match with the userId (For Client)
 **/
router.get('/:currentJobId', async (req, res) => {
  const jobId = parseInt(req.params.currentJobId);
  console.log("hi");
  const appliedApplicants = await applicants.find({jobId: jobId});
  console.log("test" + appliedApplicants);
  return res.json(appliedApplicants);
});
module.exports = router;