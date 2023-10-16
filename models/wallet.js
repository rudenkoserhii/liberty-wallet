const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    walletNumber: {
      type: String,
      required: true,
    },
    balance: {
      type: String,
      required: true,
    },
    sendToWallet: {
      type: Number,
      required: true,
    },
    sendToCard: {
      type: Number,
      required: true,
    },
    getCash: {
      type: Number,
      required: true,
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

const Wallet = mongoose.model("wallet", walletSchema);

module.exports = {
  Wallet,
};
