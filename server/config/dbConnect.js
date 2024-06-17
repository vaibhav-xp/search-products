const mongoose = require("mongoose")

const dbConnect = (URI) => {
    const option = {
        dbName: "meraStore"
    }
    mongoose.connect(URI, option)
        .then(() => console.log("Database Connected Succssfully."))
        .catch((error) => console.log(error.message));
}

module.exports = dbConnect;