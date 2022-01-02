import express from "express";
import {getJobByKey,getAllJobs,insertNewJob,updateJobByKey,deleteJobByKey} from "../controllers/jobs.js"
const router = express.Router();
router.get("/getJobByKey/:key",getJobByKey);
router.get("/getAllJobs",getAllJobs);
router.get("/insertNewJob/:Key/:category/:desc/:date/:contact/:active",insertNewJob);
router.get("updateJobByKey/:Key/:category/:desc/:date/:contact/:active",updateJobByKey);
router.get("deletyeJobByKey/:key",deleteJobByKey);
export default router;