const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "rollNo":{type:Number}
},{
    collection: "students"
});

module.exports = mongoose.model("studentSchema",studentSchema);

// 1. Create a react application inside the project folder by using the command 
// npx create-react-app frontend

// 2. Install the necessary modules for frontend application such as axios, react-router-dom, bootstrap
// npm install axios react-router-dom bootstrap@5

