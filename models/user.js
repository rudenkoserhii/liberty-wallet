const Joi = require("joi");
const mongoose = require("mongoose");
// require('mongoose-type-email');
// require('mongoose-type-url');

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32).required(),
  firstName: Joi.string().min(3).max(32).required(),
  lastName: Joi.string().min(3).max(32).required(),
  surName: Joi.string().min(3).max(32).required(),
  nickName: Joi.string().min(3).max(32).required(),
  phone: Joi.string().length(13).required(),
  employmentType: Joi.string().required(),
  workExperience: Joi.string().required(),
  averageIncome: Joi.number()
    .moreThan("0")
    .positive()
    .integer()
    .min(1)
    .max(10)
    .required(),
  birthday: Joi.date(),
});

const userUpdateValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32).required(),
  firstName: Joi.string().min(3).max(32).required(),
  lastName: Joi.string().min(3).max(32).required(),
  surName: Joi.string().min(3).max(32).required(),
  nickName: Joi.string().min(3).max(32).required(),
  phone: Joi.string().length(13).required(),
  employmentType: Joi.string().required(),
  workExperience: Joi.string().required(),
  averageIncome: Joi.number()
    .moreThan("0")
    .positive()
    .integer()
    .min(1)
    .max(10)
    .required(),
  birthday: Joi.date(),
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, "Set user email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password"],
    },
    firstName: {
      type: String,
      required: [true, "Set user firstname"],
    },
    lastName: {
      type: String,
      required: [true, "Set user lastname"],
    },
    surName: {
      type: String,
      required: [true, "Set user surname"],
    },
    nickName: {
      type: String,
      required: [true, "Set user surname"],
    },
    phone: {
      type: String,
      required: [true, "Set phone number"],
    },
    employmentType: {
      type: String,
      required: [true, "Set employment type"],
    },
    workExperience: {
      type: String,
      required: [true, "Set work experience"],
    },
    averageIncome: {
      type: Number,
      required: [true, "Set average income"],
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    birthday: {
      type: Date,
      required: [true, "Set birthday user"],
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    authToken: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = { User, userValidationSchema, userUpdateValidationSchema };
