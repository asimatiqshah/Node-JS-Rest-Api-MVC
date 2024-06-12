const UserModal = require("../models/user");
let mongoose = require("mongoose");

let handlerAllGetUsers = async (req, res) => {
  let actualData = await UserModal.find();
  //400
  if (actualData.length < 1) {
    res.status(400).send({
      status: false,
      message: "No Data Available",
    });
  }
  //200
  return res.status(200).send({
    status: true,
    message: "List of all items",
    data: actualData,
  });
};

const handlerCreateNewUser = async (req, res) => {
  const { name, email } = req.body;
  //400
  if (!name || !email) {
    return res.status(400).send({
      status: false,
      message: "All Fields Required",
    });
  }

  //401
  let checkEmail = await UserModal.findOne({ email });
  if (checkEmail) {
    return res.status(401).send({
      status: false,
      message: "Email is already exists",
    });
  }

  //200
  try {
    let result = await UserModal.create({
      name,
      email,
    });
    if (result) {
      return res.status(200).send({
        status: true,
        message: "Data Added Sucessfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(`Data Creting ERROR ${error}`);
  }
};

const handlerGetSingleUser = async (req, res) => {
  const id = req.params.id;
  //checking the ID is exist in database
  var isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) {
    return res.status(400).send({
      status: false,
      message: "ID is not valid",
    });
  }
  let result = await UserModal.findById(id);
  if (result) {
    return res.status(200).send(result);
  }
};

const handlerDeleterSingleUser = async (req, res) => {
  const id = req.params.id;
  //checking the ID is exist in database
  var isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    return res.status(400).send({
      status: false,
      message: "ID is not valid",
    });
  }

  let actualData = await UserModal.findByIdAndDelete(id);
  if (actualData) {
    return res.status(200).send({
      status: true,
      message: "ID is deleted sucessfully",
      data: actualData,
    });
  }
};


const handlerUpdateUser = async (req,res)=>{
  const id = req.params.id;
  const {name,email} = req.body;
  //checking the ID is exist in database
  const isValidID = mongoose.isValidObjectId(id);
  if (!isValidID) {
    return res.status(401).send({
      status: false,
      message: "ID is not valid",
    });
  }

  //400
  if(!name || !email){
    return res.status(400).send({
      status:false,
      message:'All fields required'
    })
  }

  //200
  let actualData = await UserModal.findByIdAndUpdate(id,{
    name,
    email
  },{new:true});

  if(actualData){
    return res.status(200).send({
      status:200,
      message:'Data Inserted Sucessfully',
      data:actualData
    })
  }

}


module.exports = {
  handlerAllGetUsers,
  handlerCreateNewUser,
  handlerGetSingleUser,
  handlerDeleterSingleUser,
  handlerUpdateUser
};
