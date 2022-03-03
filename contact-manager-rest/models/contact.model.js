import mongoose from "mongoose";

const Phone = new mongoose.Schema({
    mobileNumber: {
        type: Number,
        required: true,
      },
      workNumber: {
        type: Number,
      },
      homeNumber: {
        type: Number,
      },
});
const Contacts = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },    
    phone: {
      type: Phone,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  });
export default mongoose.model("Contacts",Contacts);
