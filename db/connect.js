const mongoose = require('mongoose'),
      db = process.env.MONGO_URI
      ,
      connectDB = async () => {
        try {
             mongoose.connect(
                db, { useNewUrlParser: true, }
            );
            console.log("mongo db connected");
        }

        catch (err) {
            console.error(err.message);
            process.exit(1);
        }
      };

module.exports = connectDB;