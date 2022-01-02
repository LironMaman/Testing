import  mongoose  from "mongoose";

// declaring job schema to save/query to/from the DB
const jobSchema = new mongoose.Schema({key:String,category:String, desc:String, date:String, contact:String, active:String});
const jobs = mongoose.model("t_jobs",jobSchema);

// get one job by key from t_jobs
const getJobByKey= (request,response) =>{
    const key = request.params.key;
    
    // find the key job in moongoose schema
    user.findOne({key:key}).then(result=>{
        response.status(200).json(result);
    });
}
        
// get all jobs from t_jobs
const getAllJobs=(request,response)=>{
    jobs.find().then(result=>{response.status(200).json(result)});
}

const insertNewJob=(request,response)=>{
    // getting al params from request
    const job  = new jobs({key:request.params.key,category:request.params.category,desc:request.params.desc,date:request.params.date,contact:request.params.contact,active:request.params.active});
    
    user.save().then(result=>{response.status(200).json(result)});
}
const updateJobByKey=(request,response)=>{
    // find user at mongo and update it    
    jobs.updateOne({key:request.params.key},{key:request.params.key,category:request.params.category,desc:request.params.desc,date:request.params.date,contact:request.params.contact,active:request.params.active})
    .then(result=>{response.status(200).json(result)});
}

const deleteJobByKey=(request,response)=>{
    jobs.deleteOne({key:request.params.key}).then(result=>{response.status(200).jason(result)});
}
export {getJobByKey,getAllJobs,insertNewJob,updateJobByKey,deleteJobByKey};