import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGOURL);

const userSchema = new mongoose.Schema({
    email: String, // String is shorthand for {type: String}
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number
  });

const User = mongoose.model('Users', userSchema);

const accountsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //reference to User Table
    ref: "User",
    required: true
  },
  balance: {
    type: Number,
    required: true
  }

})

export const Account = mongoose.model('Accounts',accountsSchema)

// module.exports = { User }

export default User