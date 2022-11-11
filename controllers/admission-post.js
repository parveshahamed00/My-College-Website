const admissionSchema=require("../models/admission-schema")
exports.admissionPost=(req,res)=>{
    // console.log(req.body);
    const online_admission = admissionSchema.admission({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      dob: req.body.dob,
      hsc_percentage: req.body.hsc_percentage,
      major: req.body.major,
      domain: req.body.domain,
      address: req.body.address,
    });
       online_admission.save(function (err, result) {
         if (err) {
           console.log(err);
           res.sendStatus(500);
         } else {
           console.log("Scuessfully Saved to database");

           res.sendFile(__dirname + "/admission-success.html");
         }
       });
}