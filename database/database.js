const mongoose = require("mongoose");

const uri = `mongodb+srv://akash:akash@cluster0.xuibt.mongodb.net/imdb-clone?authSource=admin&replicaSet=atlas-pmz7k7-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`;

const connectDatabase = () => {
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log("mongodb connected on: ", data.connection.host);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
