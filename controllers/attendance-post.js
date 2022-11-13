const mongoose = require("mongoose");
const lodash = require("lodash");
exports.attendance = (req, res) => {
  const collection = mongoose.connection.db.collection("attendances");

  collection.findOne(
    { rollNo: lodash.toLower(req.body.rollNo) },
    (err, docs) => {
      if (!err) {
        // console.log(docs);
        if (docs === null) {
          res.write("<h1>Error !!</h1>");
          res.write("<h3>Student Not found in database</h3>");

          console.log("Student Not fount in database");
        } else {
            // console.log(docs);
        }
      } else {
        console.log(err);
        res.sendStatus(500);
      }
    }
  );
};
