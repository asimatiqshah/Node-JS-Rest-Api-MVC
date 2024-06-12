const mongoose  = require("mongoose");

const ConnectionDB = (url)=>{
mongoose
    .connect(url, { dbName: 'TechZone_DB' })
    .then((response) => {
        console.log("MongoDB Connected Successfully")
    })
    .catch((err) => {
        console.log("Database Not Connected")
    })
}

module.exports = {
    ConnectionDB
}
