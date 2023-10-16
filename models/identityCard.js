const Joi = require("joi");
const mongoose = require("mongoose");

const identityCardValidationSchema = Joi.object({
  identityCard: Joi.string()
    .valid("passport", "id-card", "driving license")
    .required(),
  series: Joi.string().required(),
  number: Joi.number().max(32).required(),
  validUntil: Joi.date(),
  dateIssue: Joi.date(),
  autorIssue: Joi.string().min(7).max(32).required(),
  taxNumber: Joi.number().length(10),
});

const identityCardUpdateValidationSchema = Joi.object({
  identityCard: Joi.string()
    .valid("passport", "id-card", "driving license")
    .required(),
  series: Joi.string().required(),
  number: Joi.number().max(32).required(),
  validUntil: Joi.date(),
  dateIssue: Joi.date(),
  autorIssue: Joi.string().min(7).max(32).required(),
  taxNumber: Joi.number().length(10),
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

const IdentityCard = mongoose.model("identityCard", identityCardSchema);

module.exports = {
  IdentityCard,
  identityCardValidationSchema,
  identityCardUpdateValidationSchema,
};
