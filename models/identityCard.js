const Joi = require("joi");
const mongoose = require("mongoose");

const userValidationSchema = Joi.object({
  userName: Joi.string().min(3).max(32).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32).required(),
  location: Joi.string().required(),
  phone: Joi.string().length(13).required(),
  birtday: Joi.date(),
  avatar: Joi.string().uri(),
});

const userUpdateValidationSchema = Joi.object({
  userName: Joi.string().min(3).max(32),
  email: Joi.string().email(),
  password: Joi.string().min(7).max(32),
  location: Joi.string(),
  phone: Joi.string().length(13),
  birthday: Joi.date(),
  avatar: Joi.string().uri(),
});

const identityCardSchema = new mongoose.Schema(
  {
    identityCard: {
      type: String,
      enum: ["passport", "id-card", "driving license"],
      required: [true, "Is required"],
      default: "passport",
    },
    series: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    validUntil: {
      type: Date,
      required: true,
    },
    dateIssue: {
      type: Date,
      required: true,
    },
    autorIssue: {
      type: String,
      required: true,
    },
    taxNumber: {
      type: Number,
      required: [true, "Set individual tax number"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = mongoose.model("users", UsersSchema);

module.exports = { Users, userValidationSchema, userUpdateValidationSchema };
