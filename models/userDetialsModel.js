import mongoose, { Schema } from "mongoose";

/**
 * Create database scheme for user details
 */
const UserDetailsScheme = new Schema({
  title: {
    type: String,
    required: "Mr. or Ms. or Mrs."
  },
  firstName: {
    type: String,
    required: "First name is required"
  },
  middleName: {
    type: String,
    required: "Middle name is required"
  },
  lastName: {
    type: String,
    required: "Last name is required"
  },
  gender: {
    type: String,
    required: "Gender is required "
  },
  email: {
    type: String,
    required: "Email address is required "
  },
  mobile: {
    type: String,
    required: "Mobile number is required"
  },
  telephone: {
    type: String
  },
  birthday: {
    type: String,
    required: "Birthday is required"
  },
  age: {
    type: String,
    required: "Age is required"
  },
  createdBy: {
    type: String
  },
  createdDate: {
    type: Date
  },
  updatedBy: {
    type: String
  },
  updatedDate: {
    type: Date
  }
});

export default mongoose.model("UserDetails", UserDetailsScheme);
