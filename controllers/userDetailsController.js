import mongoose from "mongoose";
import userDetails from "../models/userDetialsModel.js";

exports.getUserDetails = (req, res) => {
  userDetails.findById(req.params.userDetailId, (err, note) => {
    if (err) {
      res.send(err);
    }

    res.json(note);
  });
};

exports.getAllUserDetails = (req, res) => {
  userDetails.find({}, (err, userDetails) => {
    if (err) {
      res.send(err);
    }
    res.json(userDetails);
  });
};

exports.createUserDetail = (req, res) => {
  const newUserDetails = new userDetails(req.body);

  newUserDetails.save((err, userDetail) => {
    if (err) {
      res.send(err);
    }

    res.json(userDetail);
  });
};

exports.updateUserDetail = (req, res) => {
  userDetails.findOneAndUpdate(
    {
      _id: req.params.userDetailId
    },
    req.body,
    (err, userDetail) => {
      if (err) {
        res.send(err);
      }

      res.json(userDetail);
    }
  );
};

exports.deleteUserDetail = (req, res) => {
  userDetails.remove(
    {
      _id: req.params.userDetailId
    },
    err => {
      if (err) {
        res.send(err);
      }

      res.json({
        message: `note ${req.params.userDetailId} successfully deleted`
      });
    }
  );
};
